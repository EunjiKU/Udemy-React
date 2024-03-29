import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: 'https://react-http-2dab4-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { text: taskText }
      },
      // ✅첫번째 인자 : 실행이 예정된 함수에서 this 예약어를 사용
      // ✅두번째 인자 : 호출 예정인 함수가 받는 첫번째 인자
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
