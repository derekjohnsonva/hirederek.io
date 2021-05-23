import Card from "./Card";
import Header from "./Header";
function Education() {
  return (
    <div className="Education">
      <Header
        title="Education"
        subtitle="“Errors of opinion may be tolerated where reason is left free to combat it” -Thomas Jefferson"
      />
      <Card
        organization="University of Virginia"
        dateRange="Aug 2018 - Present"
        title="Bachelors of Science in CS"
        details="I began at UVA as an engineer and quickly fell in love with coding. After my first CS class I knew I wanted it to be my major. I maintain a 3.67 GPA. During my first year I became a founding member of the UVA blockchain club."
      />
      <div className="Boxes">
        <div className="Box">
          <h3>Relavent Corses</h3>
          <ul>
            <li>Algorithms</li>
            <li>Blockchain Technology</li>
            <li>Compilers</li>
            <li>Moble App Development</li>
            <li>Software Development</li>
            <li>Operating Systems</li>
          </ul>
        </div>
        <div className="Box">
          <h3>Languages I Know</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Rust</li>
          </ul>
        </div>
        <div className="Box">
          <h3>Skills</h3>
          <div className="Row">
            <p className="Bold">Web Development:</p>
            <p>HTML/CSS/JavaScript, React, Django, Java Spring, REST</p>
          </div>
          <div className="Row">
            <p className="Bold">Machine Learning</p>
            <p>Pandas, scikit-learn</p>
          </div>
          <div className="Row">
            <p className="Bold">Software Development</p>
            <p>Git, Scrum, Bash Scripting, Cloud Computing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
