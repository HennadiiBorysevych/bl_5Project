import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useDispatch } from 'react-redux';
import { useGetTodosQuery } from 'redux/Api/Api';
// import { selectTodos } from 'redux/todo/seslectors';
import { deleteTodo } from 'redux/todo/slice';

export const App = () => {
  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem('todos')) ?? []
  // );
  const { data: todos } = useGetTodosQuery();

  // const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos && todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos &&
              todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.query}
                    counter={index + 1}
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
