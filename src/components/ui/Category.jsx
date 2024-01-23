function Category({ category }) {
  const { id, title, image } = category;

  return (
    <a
      href="#"
      className="flex flex-col group items-center text-center p-4 gap-y-2 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-lg border border-gray-200"
      />
      <span className="text-sm tracking-tight  font-semibold text-gray-700 group-hover:text-brand-color">
        {title}
      </span>
    </a>
  );
}

export default Category;
