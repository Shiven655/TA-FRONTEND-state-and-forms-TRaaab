function Food(props) {
  return (
    <div>
      {props.map((x) => (
        <img scr={x.img} alt={x.id} />
      ))}
    </div>
  );
}
export default Food;
