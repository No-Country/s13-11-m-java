interface AuthTemplateProps {
  image?: string;
  alt?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const AuthTemplate = (props: AuthTemplateProps) => {
  const { image, title, alt, children } = props;
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-5">
      <div className="container col-span-2 bg-primary py-8 text-background max-md:hidden max-md:text-center">
        <div className="ms-auto flex h-full max-w-xl flex-col justify-center space-y-12 pt-16">
          {title && <h1 className="text-3xl">{title}</h1>}
          {image && (
            <div>
              <img src={image} alt={alt} />
            </div>
          )}
        </div>
      </div>
      <div className="container col-span-3 py-8">
        <div className="flex h-full flex-col justify-center pt-16">{children}</div>
      </div>
    </div>
  );
};
export default AuthTemplate;
