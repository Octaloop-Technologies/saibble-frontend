interface SectionHeaderProps {
  title: string;
  icon: string;
}

const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-exo font-bold text-glow">
        {title.replace(/^[^\s]*\s/, '')} {/* Remove the emoji and section number */}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
    </div>
  );
};

export default SectionHeader;