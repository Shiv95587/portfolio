function SingleDetail({ detailName, detailDescription }) {
  return (
    <li className="single-detail">
      <h5>{detailName}</h5>
      <p>{detailDescription}</p>
    </li>
  );
}
export default SingleDetail;
