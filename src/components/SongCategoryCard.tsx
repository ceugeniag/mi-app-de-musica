type SongCategoryCardProps = {
  title: string;
  children: React.ReactNode;
};

const SongCategoryCard = ({ title, children }: SongCategoryCardProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default SongCategoryCard;
