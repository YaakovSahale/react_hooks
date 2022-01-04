import useEmailLocalStorage from "../hooks/useEmailLocalStorage ";

const Email = () => {
  const [email, setEmailExtended] = useEmailLocalStorage("5@gmail.com");

  return (
    <div>
      <p> {email}</p>
    </div>
  );
};

export default Email;
