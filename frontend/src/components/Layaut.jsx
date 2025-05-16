const Layaut = (props) => {
  return (
    <>
      <section className=" mx-auto flex flex-col items-center">
        {props.children}
      </section>
    </>
  );
};

export default Layaut;
