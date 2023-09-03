import { forwardRef } from "react";
const SkillsSection = forwardRef<HTMLElement, {}>((props, ref) => {
  console.log(props);
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
