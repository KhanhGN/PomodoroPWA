import { FC, ChangeEvent, memo, MouseEvent } from 'react';

import { ReactComponent as CrossSVG } from '../../assets/x-svgrepo-com.svg';
import {
	TaskSummary,
	TaskDateContainer,
	TaskContainer,
	DeleteTaskContainer,
	CheckBoxContainer,
	TaskNameContainer,
	DetailContainer,
} from './task.styles';

export type ListProps = {
	id: string;
	taskName: string;
	complete: boolean;
	completedAt: string;
	description: string;
	openDesc: boolean;
	onChecked: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
	onDelete: (event: MouseEvent<HTMLSpanElement>, id: string) => void;
	onOpen: (event: MouseEvent<HTMLDivElement>, id: string) => void;
};

const Task: FC<ListProps> = memo(
	({ id, taskName, completedAt, complete, description, openDesc, onChecked, onDelete, onOpen }) => {
		return (
			<TaskContainer id={id}>
				<TaskSummary onClick={(e) => onOpen(e, id)}>
					<TaskNameContainer>{taskName}</TaskNameContainer>
					<CheckBoxContainer
						type='checkbox'
						checked={complete}
						onChange={(e) => onChecked(e, id)}
					/>
					<TaskDateContainer>{completedAt}</TaskDateContainer>
					<DeleteTaskContainer onClick={(e) => onDelete(e, id)}>
						<CrossSVG />
					</DeleteTaskContainer>
				</TaskSummary>
				{openDesc && <DetailContainer>{description}</DetailContainer>}
			</TaskContainer>
		);
	}
);

export default Task;
