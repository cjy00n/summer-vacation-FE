import FillStarIcon from "../../assets/icons/FillStarIcon";

interface HomeTitleProps {
  title: string;
  description: string;
}
const HomeTitle = ({ title, description }: HomeTitleProps) => {
  return (
    <div className="py-2">
      <div className="flex items-center my-1">
        <span className="text-xl font-bold mr-1">{title}</span>
        <FillStarIcon fillColor="black" />
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default HomeTitle;
