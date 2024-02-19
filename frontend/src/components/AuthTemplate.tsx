interface AuthTemplateProps {
  image?: string;
  alt?: string;
  title?: string;
  children?: React.ReactNode;
}

const AuthTemplate = (props: AuthTemplateProps) => {
  const { image, title, alt, children } = props;
  return (
    <div className="grid min-h-screen grid-cols-5">
      <div className="container col-span-2 grid place-content-center space-y-12 bg-primary text-background">
        {title && <h1 className="px-8 text-3xl">{title}</h1>}
        {image && (
          <div>
            <img src={image} alt={alt} />
          </div>
        )}
      </div>
      <div className="col-span-3 flex h-screen items-center">{children}</div>
    </div>
  );
};
export default AuthTemplate;
