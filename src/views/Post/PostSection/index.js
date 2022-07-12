import Parser from "html-react-parser";
import "./index.css";

function PostSection({ type, content }) {
  switch (type) {
    case "subtitle":
      return (
        <div className="flex">
          <h2 className="subtitle text-2xl font-bold mt-5">{content}</h2>
        </div>
      );

    case "paragraph":
      const paragraphs = content.split("\n");

      return paragraphs.map((paragraph, i) => (
        <p className="paragraph" key={`paragraph-${i}`}>
          {Parser(paragraph)}
        </p>
      ));

    case "image":
      return (
        <div className="img-container flex justify-center items-center">
          <img src={`${content}`} alt="" />
        </div>
      );

    case "note":
      return <p className="note px-2 py-2 pl-5">{content}</p>;

    default:
      return null;
  }
}

export default PostSection;
