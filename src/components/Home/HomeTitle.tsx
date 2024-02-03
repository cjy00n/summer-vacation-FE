import FillStarIcon from "../../assets/icons/FillStarIcon";

interface HomeTitleProps {
  title: string;
  description?: string;
}
const HomeTitle = ({ title, description = "" }: HomeTitleProps) => {
  return (
    <div className="py-2">
      <div className="my-1 flex items-center">
        <span className="mr-1 text-xl font-bold">{title}</span>
        <FillStarIcon fillColor="black" />
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default HomeTitle;
