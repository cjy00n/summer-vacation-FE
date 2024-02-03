interface HomeContentItemProps {
  icon: React.ReactElement;
  content: string;
}
const HomeContentItem = ({ icon, content }: HomeContentItemProps) => {
  return (
    <div className="my-1 flex items-center">
      {icon}
      <span className="ml-1 text-xs text-white">{content}</span>
    </div>
  );
};

export default HomeContentItem;
