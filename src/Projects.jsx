import "./Project.css";

const Project = () => {
  return (
    <div className="projectsContainer">
      <div className="project">
        <div className="projectTitle">Beautify Photos</div>
        <div className="projectDescription">
          Best Moments™ has hired your team to develop an Android application
          that can make photos better. They want a person to be able to take
          photos and add things to them, such as borders, special effects, black
          and white, etc. These photos could be existing photos on the user’s
          phone or taken with the user’s camera. <br />
          After the pictures are edited, they should be able to be sent to
          social media platforms, or emailed, or saved back to the phone’s
          drive. Some other things to consider are a history of previously
          edited photos, rotating photos, adding to Google Photos or OneDrive,
          or reading photos from various places on the internet.
        </div>
      </div>
      <div className="project">
        <div className="projectTitle">Elevators</div>
        <div className="projectDescription">
          There are hundreds of thousands of building and floor combinations
          that require elevators. Something that isn’t commonly thought about is
          how multiple elevators respond to requests from people both in the
          elevators and waiting on different floors. This especially becomes
          important once there are multiple elevators and increasing number of
          floors. <br />
          Tall Buildings Inc. has hired your team to create an Android
          application that will allow them to simulate various building heights
          and number of elevators. You should think about all aspects of
          elevators and buildings, such as size of the elevators, speed at which
          they move, speed of the doors opening, number of floors, number of
          elevators, etc. <br />
          The customer desires a visual representation of the buildings and the
          elevators operating in real time, as well as accelerated simulations
          for testing. There should be multiple algorithms to test, such as
          having a master controller send commands to each elevator, or having
          each elevator maintain its own list of floors to visit. The simulation
          should allow for changing number of people, which floors are more
          popular to visit, etc. A data structure should be designed so the
          exact inputs can be run on all algorithms. After a simulation is
          finished, statistics should be available such as amount of time each
          elevator was used/idle, average wait time, average number of stops,
          etc.
        </div>
      </div>
      <div className="project">
        <div className="projectTitle">GPS Adventure</div>
        <div className="projectDescription">
          Finders Keepers Inc. has hired your team to develop an Android
          application that allows people to play a real-world exploration game
          on Bethel’s campus. Players of this game will need to walk around
          campus, solving clues that the application gives them. Once they reach
          the correct location, the application will automatically detect it and
          then give the next set of riddles. There should be multiple sets of
          these riddles that the player can play.
          <br /> The applications should display the user’s current location and
          their current riddle. A hint system of various types should be
          available, such as extra information about the riddle, distance away
          from the current answer, etc.
          <br /> Once the final location is found, statistics of how the player
          did should be displayed. These include things such as distance
          traveled, total time played, average time for each riddle, hardest
          riddle, the path the user took on a map, etc.
        </div>
      </div>
      <div className="project">
        <div className="projectTitle">Landmarks</div>
        <div className="projectDescription">
          Explorers™ has hired your team to develop an Android application that
          help people explore Bethel. When a new person has arrived on campus,
          they could use your app to explore and learn about various parts of
          the campus.
          <br />
          The app will use the user’s real-time location and pop-up interesting
          things about the parts of Bethel that are nearby. This could be
          historical, instructional, or entertainment information. The app could
          display text, pictures, or even sounds and videos.
          <br />
          Some other things to consider are suggesting places to visit and
          helping the user navigate, specific guided tours with instructions to
          navigate between a specific order of places, or adding other places
          outside of Bethel such as walkable parks.
        </div>
      </div>
      <div className="project">
        <div className="projectTitle">Robot Puzzles</div>
        <div className="projectDescription">
          IRoomba’s Robot Emporium has hired your team to build a navigation
          puzzle app for their customers. The idea is that a player of the game
          would input a set of instructions for the robot to follow through a
          grid, and the player gets to watch the robot follow the program.
          <br /> The game should display a grid, with the robot on some
          location. The object is to navigate the robot to another location on
          the grid. The user will preprogram commands such as up, down, left
          right. There should also be two sub programs that can be called, the
          main program can use the sub programs to repeat sequences of commands
          that need to be executed more than once.
          <br /> There should be several pre-generated puzzles for the user to
          play, at varying levels of difficulty. The program that is being
          executed should be displayed while the robot is moving, and highlight
          the currently executing command, including through the sub programs as
          necessary.
          <br /> Once the robot has either run out of commands to execute or has
          reached the destination, statistics should be displayed for how far
          the robot traveled, number of excess commands not used, how efficient
          the path was, etc.
        </div>
      </div>
      <div className="project">
        <div className="projectTitle">Bible Quizzing Matchup Generator</div>
        <div className="projectDescription">
          Our organization hosts competitive Bible Quizzing events where teams
          memorize and recite hundreds of New Testament verses, with material
          rotating annually. Each event consists of 25-30 teams, with six rounds
          of quizzes per meet, where three teams compete per quiz. Manually
          generating fair matchups is challenging, as organizers must balance
          team pairings while ensuring an equitable strength of schedule. To
          streamline this process, we require an automated software solution
          that generates optimized match schedules while adhering to predefined
          fairness rules.
          <br /> The software must efficiently create a bracket of matchups that
          minimizes repeat pairings and ensures competitive balance. It should
          support dynamic team adjustments, provide an intuitive interface for
          organizers, and allow for customizable rules to refine scheduling
          logic. The system should also include reporting features for easy
          distribution of schedules. By automating this process, the tool will
          significantly reduce administrative effort while maintaining fairness
          and integrity in the competition.
        </div>
      </div>
    </div>
  );
};

export default Project;
