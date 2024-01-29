interface HomeContentItemProps {
  icon: React.ReactElement;
  content: string;
}
const HomeContentItem = ({ icon, content }: HomeContentItemProps) => {
  return (
    <div className="flex items-center my-1">
      {icon}
      <span className="ml-1 text-xs text-black">{content}</span>
    </div>
  );
};

export default HomeContentItem;
