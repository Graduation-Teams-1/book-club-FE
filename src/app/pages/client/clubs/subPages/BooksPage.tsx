import BookCard from "../../components/BookCard";

const BooksPage = () => {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <h1>books list :</h1>
      <div className="flex flex-col gap-4">
        <h4>currently reading :</h4>
        {/* <p>• Book 1</p> bookcomponent */}
        <BookCard />
        <h4>Previously Read : </h4>
        {/* <p>• Book 1</p> bookcomponent */}
        <BookCard />
      </div>
    </div>
  );
};

export default BooksPage;
