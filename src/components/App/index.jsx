import { useSelector } from "react-redux";
import Header from "components/Header";
import Form from "components/Form";
import Message from "components/Message";

const App = () => {
  const { submitted } = useSelector((state) => state);

  return (
    <>
      <Header />
      {submitted ? <Message /> : <Form />}
    </>
  );
};

export default App;
