import { forwardRef } from "react";

const ProjectSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
    >
      ProjectSection
    </section>
  );
});

export default ProjectSection;
