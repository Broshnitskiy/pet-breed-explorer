import { FC } from "react";
import { Container } from "./Container";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <Container>
        <div className="max-w-7xl mx-auto text-center pt-6 pb-6">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
          <p className="text-sm">
            Made with ❤️ by{" "}
            <a href="/" className="hover:text-gray-300">
              Broshnitskiy
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
