import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {asyncAddTodo, asyncReceiveTodo} from "./state/todo/action";
import CardItem from "./component/card-item";
import {receiveModalActionCreator} from "./state/modal/action";
import ModalAddTodo from "./component/modal";

function App() {
  const {
      todos = [],
      modal
  }  = useSelector((states) => states);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveTodo());
    }, [dispatch]);

    const openModalClick = () => {
        console.log(modal);
        dispatch(receiveModalActionCreator(!modal));
    }

    const onCreateTodo = ({ title, description }) => {
        dispatch(asyncAddTodo({ title, description }));
    }


  return (
      <main className={'py-4 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto space-y-4'}>
          <section className={'px-4'}>
              <button className={'rounded px-4 py-1 border bg-red-400 text-white'} onClick={openModalClick}>Open Modal</button>
          </section>
          <section className={'px-4 grid grid-cols-12 gap-4'}>
              {
                  todos.map((todo) => (
                      <CardItem key={todo.id} title={todo.title} description={todo.description} />
                  ))
              }
          </section>

          <ModalAddTodo openModal={openModalClick} isOpen={modal} onCreateTodo={onCreateTodo} />
      </main>
  );
}

export default App;
