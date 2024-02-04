import FillStarIcon from "../../assets/icons/FillStarIcon";

interface FeedTitleProps {
  title: string;
  description?: string;
}
const FeedTitle = ({ title, description = "" }: FeedTitleProps) => {
  return (
    <div className="px-3 py-3 ">
      <div className="mt-1 flex items-center">
        <span className="mr-1 text-xl font-bold">{title}</span>
        <FillStarIcon fillColor="black" />
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FeedTitle;
