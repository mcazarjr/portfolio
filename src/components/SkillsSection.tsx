import { forwardRef } from "react";
const SkillsSection = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <>
      <section
        id="skills"
        ref={ref}
      >
        <div>SkillsSection</div>
      </section>
    </>
  );
});

export default SkillsSection;
