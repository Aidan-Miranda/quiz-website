import AnimeIcon from "../public/anime.png";
import ProgrammingIcon from "../public/programming.png";
import GamingIcon from "../public/gaming.png";
import LiteratureIcon from "../public/literature.png";
import MoviesIcon from "../public/movies.svg";
import ScienceIcon from "../public/science.png";
import HistoryIcon from "../public/history.svg";
import MythologyIcon from "../public/mythology.svg";
import RoboticsIcon from "../public/robotics.svg";

export const images = [
  AnimeIcon,
  ProgrammingIcon,
  GamingIcon,
  LiteratureIcon,
  MoviesIcon,
  ScienceIcon,
  HistoryIcon,
  MythologyIcon,
  RoboticsIcon,
];

// Categories
export const categories = {
  anime: "Anime & Manga",
  gaming: "Gaming",
  programming: "Programming",
  literature: "Literature",
  movies: "Movies",
  science: "Science & Tech",
  history: "History",
  mythology: "Mythology & Legends",
  robotics: "Robotics & AI",
};

// Destructuring
const {
  anime,
  gaming,
  programming,
  literature,
  movies,
  science,
  history,
  mythology,
  robotics,
} = categories;

export interface questionsInterface {
  id: number;
  difficulty: string;
  question: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const questions = [
  {
    id: 1,
    difficulty: "Easy",
    question: 'Who is the main protagonist of the anime "One Piece"?',
    category: anime,
    correct_answer: "Monkey D. Luffy",
    incorrect_answers: ["Roronoa Zoro", "Nami", "Gol D. Roger"],
  },
  {
    id: 2,
    difficulty: "Easy",
    question:
      'What is the name of the academy in the anime "My Hero Academia" where heroes are trained?',
    category: anime,
    correct_answer: "U.A. High School",
    incorrect_answers: [
      "Hero Academy",
      "Superhero Training Center",
      "Pro Hero Institute",
    ],
  },
  {
    id: 3,
    difficulty: "Easy",
    question: 'Who is the strongest hero in "One Punch Man"?',
    category: anime,
    correct_answer: "Saitama",
    incorrect_answers: ["Genos", "Mumen Rider", "Bang"],
  },
  {
    id: 4,
    difficulty: "Easy",
    question:
      'What is the name of the supernatural notebook in "Death Note" that allows you to kill anyone whose name is written in it?',
    category: anime,
    correct_answer: "Death Note",
    incorrect_answers: ["Soul Note", "Doomsday Diary", "Dark Journal"],
  },
  {
    id: 5,
    difficulty: "Easy",
    question:
      'In "Sword Art Online," what is the name of the virtual reality MMORPG where the series is set?',
    category: anime,
    correct_answer: "Sword Art Online",
    incorrect_answers: [
      "Virtual World Online",
      "Fantasy Universe",
      "Cybernetic Realm",
    ],
  },
  {
    id: 6,
    difficulty: "Medium",
    question:
      'What is the name of the organization of pirates led by Shanks in "One Piece"?',
    category: anime,
    correct_answer: "Red Hair Pirates",
    incorrect_answers: [
      "Straw Hat Pirates",
      "Blackbeard Pirates",
      "Whitebeard Pirates",
    ],
  },
  {
    id: 7,
    difficulty: "Hard",
    question:
      'In "My Hero Academia," what is the real name of the hero known as All Might?',
    category: anime,
    correct_answer: "Toshinori Yagi",
    incorrect_answers: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki"],
  },
  {
    id: 8,
    difficulty: "Hard",
    question:
      'What is the name of the virtual reality MMORPG in "Sword Art Online" where players are trapped?',
    category: anime,
    correct_answer: "Aincrad",
    incorrect_answers: ["Alfheim Online", "Gun Gale Online", "Ordinal Scale"],
  },
  {
    id: 9,
    difficulty: "Medium",
    question: 'What is the true identity of the hero "One Punch Man" Saitama?',
    category: anime,
    correct_answer: "A regular guy who trained so hard he lost his hair",
    incorrect_answers: [
      "A genetically enhanced superhuman",
      "An alien from another dimension",
      "A powerful cyborg",
    ],
  },
  {
    id: 10,
    difficulty: "Medium",
    question:
      'What is the name of the association Saitama joins in "One Punch Man"?',
    category: anime,
    correct_answer: "The Hero Association",
    incorrect_answers: [
      "The S-Class Heroes",
      "The Bald Brigade",
      "The Caped Crusaders",
    ],
  },
  {
    id: 11,
    difficulty: "Easy",
    question:
      'What is the name of the protagonist in the anime "Tokyo Ghoul" who turns into a half-ghoul after a chance encounter with one?',
    category: anime,
    correct_answer: "Kaneki Ken",
    incorrect_answers: [
      "Touka Kirishima",
      "Hideyoshi Nagachika",
      "Rize Kamishiro",
    ],
  },
  {
    id: 12,
    difficulty: "Hard",
    question:
      'What is the name of the powerful ghoul investigator known as the "One-Eyed Owl" in "Tokyo Ghoul"?',
    category: anime,
    correct_answer: "Eto Yoshimura",
    incorrect_answers: ["Kishou Arima", "Koutarou Amon", "Seidou Takizawa"],
  },
  {
    id: 13,
    difficulty: "Easy",
    question: "What does HTML stand for?",
    category: programming,
    correct_answer: "HyperText Markup Language",
    incorrect_answers: [
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "HyperTransfer Text Mode Language",
    ],
  },
  {
    id: 14,
    difficulty: "Easy",
    question: "What is the main purpose of CSS?",
    category: programming,
    correct_answer: "Styling and formatting web pages",
    incorrect_answers: [
      "Creating web content",
      "Defining web structure",
      "Managing web servers",
    ],
  },
  {
    id: 15,
    difficulty: "Easy",
    question:
      "What is the output of the following JavaScript code?\n\n```\nconsole.log(2 + '2');\n```",
    category: programming,
    correct_answer: "22",
    incorrect_answers: ["4", "Error", "NaN"],
  },
  {
    id: 16,
    difficulty: "Easy",
    question: "In Python, how do you define a function?",
    category: programming,
    correct_answer: "def functionName(parameters):",
    incorrect_answers: [
      "function functionName(parameters):",
      "define functionName(parameters):",
      "functionName(parameters):",
    ],
  },
  {
    id: 17,
    difficulty: "Medium",
    question: "What is the purpose of SQL?",
    category: programming,
    correct_answer: "Managing and querying databases",
    incorrect_answers: [
      "Creating graphical user interfaces",
      "Building web applications",
      "Executing shell commands",
    ],
  },
  {
    id: 18,
    difficulty: "Medium",
    question:
      "What is the result of the following SQL query?\n\n```\nSELECT COUNT(*) FROM table_name;\n```",
    category: programming,
    correct_answer: "Number of rows in 'table_name'",
    incorrect_answers: [
      "Average value in 'table_name'",
      "Sum of all values in 'table_name'",
      "Number of columns in 'table_name'",
    ],
  },
  {
    id: 19,
    difficulty: "Medium",
    question: "What does the acronym 'API' stand for in web development?",
    category: programming,
    correct_answer: "Application Programming Interface",
    incorrect_answers: [
      "Automated Program Interface",
      "Advanced Programming Interface",
      "Application Process Integration",
    ],
  },
  {
    id: 20,
    difficulty: "Hard",
    question: "What is a closure in JavaScript?",
    category: programming,
    correct_answer:
      "A feature of JavaScript that allows inner functions to access the outer scope of a function",
    incorrect_answers: [
      "A function that returns another function",
      "A function that executes immediately upon declaration",
      "A function that takes another function as an argument",
    ],
  },
  {
    id: 21,
    difficulty: "Hard",
    question: "What is the time complexity of a binary search algorithm?",
    category: programming,
    correct_answer: "O(log n)",
    incorrect_answers: ["O(n)", "O(n log n)", "O(1)"],
  },
  {
    id: 22,
    difficulty: "Hard",
    question:
      "What is the purpose of the 'finally' block in a try-catch-finally statement in Java?",
    category: programming,
    correct_answer:
      "To specify code that will be executed regardless of whether an exception is thrown or caught",
    incorrect_answers: [
      "To catch exceptions thrown in the try block",
      "To handle exceptions in the catch block",
      "To define custom exceptions",
    ],
  },
  {
    id: 23,
    difficulty: "Easy",
    question: "Which company developed the popular game 'Minecraft'?",
    category: gaming,
    correct_answer: "Mojang",
    incorrect_answers: ["Electronic Arts", "Ubisoft", "Nintendo"],
  },
  {
    id: 24,
    difficulty: "Easy",
    question:
      "What is the name of the iconic yellow, circular character in the game 'Pac-Man'?",
    category: gaming,
    correct_answer: "Pac-Man",
    incorrect_answers: ["Blinky", "Inky", "Clyde"],
  },
  {
    id: 25,
    difficulty: "Easy",
    question: "In which game series would you find the character 'Link'?",
    category: gaming,
    correct_answer: "The Legend of Zelda",
    incorrect_answers: ["Final Fantasy", "Super Mario Bros.", "Pokémon"],
  },
  {
    id: 26,
    difficulty: "Easy",
    question: "What is the main objective in the game 'Among Us'?",
    category: gaming,
    correct_answer: "Complete tasks or identify impostors",
    incorrect_answers: [
      "Defeat the final boss",
      "Collect coins",
      "Solve puzzles",
    ],
  },
  {
    id: 27,
    difficulty: "Medium",
    question:
      "Which gaming console was released by Sony in 2000, following the original PlayStation?",
    category: gaming,
    correct_answer: "PlayStation 2",
    incorrect_answers: [
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation Portable",
    ],
  },
  {
    id: 28,
    difficulty: "Medium",
    question:
      "What popular game mode originated from the modding community of 'Half-Life'?",
    category: gaming,
    correct_answer: "Counter-Strike",
    incorrect_answers: ["Battle Royale", "Capture the Flag", "Survival Mode"],
  },
  {
    id: 29,
    difficulty: "Medium",
    question:
      "In the game 'Portal', what is the name of the artificial intelligence that guides the player?",
    category: gaming,
    correct_answer: "GLaDOS",
    incorrect_answers: ["Wheatley", "Aperture", "Cortana"],
  },
  {
    id: 30,
    difficulty: "Hard",
    question:
      "Which game franchise is known for its massive, open-world environments and dragons?",
    category: gaming,
    correct_answer: "The Elder Scrolls",
    incorrect_answers: ["Final Fantasy", "Dark Souls", "World of Warcraft"],
  },
  {
    id: 31,
    difficulty: "Easy",
    question:
      "In the classic arcade game 'Donkey Kong', what is the name of the character you control?",
    category: gaming,
    correct_answer: "Jumpman (Mario)",
    incorrect_answers: ["Yoshi", "Luigi", "Bowser"],
  },
  {
    id: 32,
    difficulty: "Hard",
    question:
      "Which gaming company is responsible for creating the 'Metal Gear' series?",
    category: gaming,
    correct_answer: "Konami",
    incorrect_answers: ["Capcom", "Square Enix", "Nintendo"],
  },
  {
    id: 33,
    difficulty: "Easy",
    question: "Who wrote the novel 'Pride and Prejudice'?",
    category: literature,
    correct_answer: "Jane Austen",
    incorrect_answers: ["Emily Brontë", "Charles Dickens", "Leo Tolstoy"],
  },
  {
    id: 34,
    difficulty: "Medium",
    question: "Which French author wrote 'Les Misérables'?",
    category: literature,
    correct_answer: "Victor Hugo",
    incorrect_answers: ["Gustave Flaubert", "Albert Camus", "Marcel Proust"],
  },
  {
    id: 35,
    difficulty: "Hard",
    question:
      "What is the pen name of the Belgian author who wrote 'The Stranger'?",
    category: literature,
    correct_answer: "Albert Camus",
    incorrect_answers: ["Jean-Paul Sartre", "Franz Kafka", "Fyodor Dostoevsky"],
  },
  {
    id: 36,
    difficulty: "Easy",
    question: "Which English playwright is known for 'Romeo and Juliet'?",
    category: literature,
    correct_answer: "William Shakespeare",
    incorrect_answers: ["Oscar Wilde", "George Bernard Shaw", "Jane Austen"],
  },
  {
    id: 37,
    difficulty: "Medium",
    question: "Who wrote the epic poem 'The Divine Comedy'?",
    category: literature,
    correct_answer: "Dante Alighieri",
    incorrect_answers: ["Homer", "Virgil", "John Milton"],
  },
  {
    id: 38,
    difficulty: "Hard",
    question: "Which Russian author wrote 'Crime and Punishment'?",
    category: literature,
    correct_answer: "Fyodor Dostoevsky",
    incorrect_answers: ["Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
  },
  {
    id: 39,
    difficulty: "Easy",
    question: "Who wrote '1984'?",
    category: literature,
    correct_answer: "George Orwell",
    incorrect_answers: ["Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
  },
  {
    id: 40,
    difficulty: "Medium",
    question: "Which Irish author wrote 'Ulysses'?",
    category: literature,
    correct_answer: "James Joyce",
    incorrect_answers: ["Samuel Beckett", "Oscar Wilde", "Jonathan Swift"],
  },
  {
    id: 41,
    difficulty: "Medium",
    question: "Who wrote the Spanish novel 'Don Quixote'?",
    category: literature,
    correct_answer: "Miguel de Cervantes",
    incorrect_answers: [
      "Federico García Lorca",
      "Gabriel García Márquez",
      "Pablo Neruda",
    ],
  },
  {
    id: 42,
    difficulty: "Hard",
    question: "Which English novelist wrote 'Jane Eyre'?",
    category: literature,
    correct_answer: "Charlotte Brontë",
    incorrect_answers: ["Emily Brontë", "Anne Brontë", "Louisa May Alcott"],
  },
  {
    id: 43,
    difficulty: "Easy",
    question: "Who directed the movie 'The Shawshank Redemption'?",
    category: movies,
    correct_answer: "Frank Darabont",
    incorrect_answers: [
      "Quentin Tarantino",
      "Steven Spielberg",
      "Martin Scorsese",
    ],
  },
  {
    id: 44,
    difficulty: "Medium",
    question: "Which actor played the lead role in the movie 'Forrest Gump'?",
    category: movies,
    correct_answer: "Tom Hanks",
    incorrect_answers: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
  },
  {
    id: 45,
    difficulty: "Hard",
    question: "What year was the movie 'Casablanca' released?",
    category: movies,
    correct_answer: "1942",
    incorrect_answers: ["1939", "1951", "1960"],
  },
  {
    id: 46,
    difficulty: "Easy",
    question: "Who played the character Jack Dawson in the movie 'Titanic'?",
    category: movies,
    correct_answer: "Leonardo DiCaprio",
    incorrect_answers: ["Johnny Depp", "Brad Pitt", "Tom Cruise"],
  },
  {
    id: 47,
    difficulty: "Medium",
    question: "Which movie features a character named 'Hannibal Lecter'?",
    category: movies,
    correct_answer: "The Silence of the Lambs",
    incorrect_answers: ["Seven", "American Psycho", "Zodiac"],
  },
  {
    id: 48,
    difficulty: "Hard",
    question: "Who directed the 1972 movie 'The Godfather'?",
    category: movies,
    correct_answer: "Francis Ford Coppola",
    incorrect_answers: [
      "Martin Scorsese",
      "Steven Spielberg",
      "Alfred Hitchcock",
    ],
  },
  {
    id: 49,
    difficulty: "Easy",
    question:
      "What is the highest-grossing film of all time (as of September 2021)?",
    category: movies,
    correct_answer: "Avengers: Endgame",
    incorrect_answers: ["Avatar", "The Lion King", "Titanic"],
  },
  {
    id: 50,
    difficulty: "Medium",
    question: "Who played the role of Vito Corleone in 'The Godfather'?",
    category: movies,
    correct_answer: "Marlon Brando",
    incorrect_answers: ["Robert De Niro", "Al Pacino", "Jack Nicholson"],
  },
  {
    id: 51,
    difficulty: "Hard",
    question: "Which film won the Academy Award for Best Picture in 1994?",
    category: movies,
    correct_answer: "Schindler's List",
    incorrect_answers: [
      "Pulp Fiction",
      "The Shawshank Redemption",
      "Forrest Gump",
    ],
  },
  {
    id: 52,
    difficulty: "Easy",
    question:
      "What is the name of the fictional wizarding school in the Harry Potter series?",
    category: movies,
    correct_answer: "Hogwarts",
    incorrect_answers: ["Beauxbatons", "Durmstrang", "Ilvermorny"],
  },
  {
    id: 53,
    difficulty: "Medium",
    question:
      "Which ancient civilization is known for building the pyramids of Giza?",
    category: history,
    correct_answer: "Ancient Egyptians",
    incorrect_answers: ["Ancient Greeks", "Mayans", "Romans"],
  },
  {
    id: 54,
    difficulty: "Easy",
    question: "Who was the first President of the United States?",
    category: history,
    correct_answer: "George Washington",
    incorrect_answers: ["John Adams", "Thomas Jefferson", "Abraham Lincoln"],
  },
  {
    id: 55,
    difficulty: "Hard",
    question: "During which war did the Battle of Gettysburg take place?",
    category: history,
    correct_answer: "American Civil War",
    incorrect_answers: ["World War I", "World War II", "Vietnam War"],
  },
  {
    id: 56,
    difficulty: "Easy",
    question: "What ancient wonder was located in the city of Babylon?",
    category: history,
    correct_answer: "Hanging Gardens",
    incorrect_answers: [
      "Colossus of Rhodes",
      "Great Pyramid of Giza",
      "Statue of Zeus at Olympia",
    ],
  },
  {
    id: 57,
    difficulty: "Medium",
    question:
      "Who was the Queen of Ancient Egypt known for her alliance with Julius Caesar and Mark Antony?",
    category: history,
    correct_answer: "Cleopatra",
    incorrect_answers: ["Nefertiti", "Hatshepsut", "Isis"],
  },
  {
    id: 58,
    difficulty: "Hard",
    question: "Which European explorer reached India by sea in 1498?",
    category: history,
    correct_answer: "Vasco da Gama",
    incorrect_answers: [
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Marco Polo",
    ],
  },
  {
    id: 59,
    difficulty: "Medium",
    question:
      "What event marked the beginning of the French Revolution in 1789?",
    category: history,
    correct_answer: "Storming of the Bastille",
    incorrect_answers: [
      "Battle of Waterloo",
      "Execution of Louis XVI",
      "Reign of Terror",
    ],
  },
  {
    id: 60,
    difficulty: "Easy",
    question: "Who wrote 'The Communist Manifesto' with Karl Marx?",
    category: history,
    correct_answer: "Friedrich Engels",
    incorrect_answers: ["Vladimir Lenin", "Joseph Stalin", "Mao Zedong"],
  },
  {
    id: 61,
    difficulty: "Hard",
    question:
      "Which empire was ruled by Emperor Ashoka, known for spreading Buddhism?",
    category: history,
    correct_answer: "Maurya Empire",
    incorrect_answers: ["Roman Empire", "Byzantine Empire", "Ottoman Empire"],
  },
  {
    id: 62,
    difficulty: "Medium",
    question: "What treaty ended World War I in 1919?",
    category: history,
    correct_answer: "Treaty of Versailles",
    incorrect_answers: [
      "Treaty of Brest-Litovsk",
      "Treaty of Trianon",
      "Treaty of Sevres",
    ],
  },
  {
    id: 63,
    difficulty: "Medium",
    question: "What is the chemical symbol for the element gold?",
    category: science,
    correct_answer: "Au",
    incorrect_answers: ["Ag", "Cu", "Fe"],
  },
  {
    id: 64,
    difficulty: "Easy",
    question: "Who is known as the father of modern physics?",
    category: science,
    correct_answer: "Albert Einstein",
    incorrect_answers: ["Isaac Newton", "Galileo Galilei", "Niels Bohr"],
  },
  {
    id: 65,
    difficulty: "Hard",
    question: "In genetics, what does DNA stand for?",
    category: science,
    correct_answer: "Deoxyribonucleic Acid",
    incorrect_answers: ["Ribonucleic Acid", "Nucleotide", "Genetic Code"],
  },
  {
    id: 66,
    difficulty: "Easy",
    question: "Which planet is known as the Red Planet?",
    category: science,
    correct_answer: "Mars",
    incorrect_answers: ["Jupiter", "Venus", "Saturn"],
  },
  {
    id: 67,
    difficulty: "Medium",
    question: "What is the powerhouse of the cell?",
    category: science,
    correct_answer: "Mitochondria",
    incorrect_answers: ["Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
  },
  {
    id: 68,
    difficulty: "Hard",
    question: "In chemistry, what is Avogadro's number?",
    category: science,
    correct_answer: "6.022 x 10^23",
    incorrect_answers: ["3.142 x 10^9", "9.81 x 10^3", "1.618 x 10^5"],
  },
  {
    id: 69,
    difficulty: "Medium",
    question: "What is the smallest unit of life?",
    category: science,
    correct_answer: "Cell",
    incorrect_answers: ["Atom", "Molecule", "Organism"],
  },
  {
    id: 70,
    difficulty: "Easy",
    question: "Which gas is essential for photosynthesis?",
    category: science,
    correct_answer: "Carbon Dioxide",
    incorrect_answers: ["Oxygen", "Nitrogen", "Hydrogen"],
  },
  {
    id: 71,
    difficulty: "Hard",
    question: "What is the speed of light in a vacuum?",
    category: science,
    correct_answer: "299,792 kilometers per second",
    incorrect_answers: [
      "150,000 kilometers per second",
      "500,000 kilometers per second",
      "1 million kilometers per second",
    ],
  },
  {
    id: 72,
    difficulty: "Medium",
    question: "Who developed the theory of relativity?",
    category: science,
    correct_answer: "Albert Einstein",
    incorrect_answers: ["Isaac Newton", "Niels Bohr", "Galileo Galilei"],
  },
  {
    id: 73,
    difficulty: "Medium",
    question: "In Greek mythology, who is the god of war?",
    category: mythology,
    correct_answer: "Ares",
    incorrect_answers: ["Zeus", "Apollo", "Hades"],
  },
  {
    id: 74,
    difficulty: "Easy",
    question: "Who is the Norse god of thunder?",
    category: mythology,
    correct_answer: "Thor",
    incorrect_answers: ["Odin", "Loki", "Freya"],
  },
  {
    id: 75,
    difficulty: "Hard",
    question: "In Egyptian mythology, who is the god of the afterlife?",
    category: mythology,
    correct_answer: "Osiris",
    incorrect_answers: ["Anubis", "Ra", "Horus"],
  },
  {
    id: 76,
    difficulty: "Easy",
    question: "Who is the goddess of wisdom in Greek mythology?",
    category: mythology,
    correct_answer: "Athena",
    incorrect_answers: ["Artemis", "Hera", "Demeter"],
  },
  {
    id: 77,
    difficulty: "Medium",
    question: "In Hindu mythology, who is the god of destruction?",
    category: mythology,
    correct_answer: "Shiva",
    incorrect_answers: ["Brahma", "Vishnu", "Ganesha"],
  },
  {
    id: 78,
    difficulty: "Hard",
    question: "Which mythical creature is said to be half-man and half-horse?",
    category: mythology,
    correct_answer: "Centaur",
    incorrect_answers: ["Minotaur", "Satyr", "Harpie"],
  },
  {
    id: 79,
    difficulty: "Medium",
    question: "Who is the Japanese god of the sea and storms?",
    category: mythology,
    correct_answer: "Ryujin",
    incorrect_answers: ["Susanoo", "Amaterasu", "Hachiman"],
  },
  {
    id: 80,
    difficulty: "Easy",
    question: "In Roman mythology, who is the king of the gods?",
    category: mythology,
    correct_answer: "Jupiter",
    incorrect_answers: ["Mars", "Apollo", "Neptune"],
  },
  {
    id: 81,
    difficulty: "Hard",
    question:
      "What is the name of the serpent in Norse mythology that circles the world?",
    category: mythology,
    correct_answer: "Jormungandr",
    incorrect_answers: ["Fafnir", "Nidhogg", "Sleipnir"],
  },
  {
    id: 82,
    difficulty: "Medium",
    question: "Who is the goddess of love and beauty in Greek mythology?",
    category: mythology,
    correct_answer: "Aphrodite",
    incorrect_answers: ["Hera", "Demeter", "Persephone"],
  },
  {
    id: 83,
    difficulty: "Medium",
    question: "What does the term 'AI' stand for in the field of robotics and technology?",
    category: robotics,
    correct_answer: "Artificial Intelligence",
    incorrect_answers: [
      "Automated Interaction",
      "Advanced Inference",
      "Analog Interface",
    ],
  },
  {
    id: 84,
    difficulty: "Medium",
    question: "Which famous humanoid robot was developed by Boston Dynamics?",
    category: robotics,
    correct_answer: "Atlas",
    incorrect_answers: ["Cheetah", "Spot", "Pepper"],
  },
  {
    id: 85,
    difficulty: "Easy",
    question:
      "What is the main purpose of a robotic arm in industrial applications?",
    category: robotics,
    correct_answer: "Manipulating objects",
    incorrect_answers: ["Singing", "Generating electricity", "Cooking"],
  },
  {
    id: 86,
    difficulty: "Easy",
    question:
      "Which programming language is commonly used in robotics programming?",
    category: robotics,
    correct_answer: "Python",
    incorrect_answers: ["Java", "C++", "Ruby"],
  },
  {
    id: 87,
    difficulty: "Medium",
    question:
      "What is the name of the famous humanoid robot developed by Hanson Robotics?",
    category: robotics,
    correct_answer: "Sophia",
    incorrect_answers: ["Aibo", "ASIMO", "Pepper"],
  },
  {
    id: 88,
    difficulty: "Hard",
    question: "In robotics, what does the term 'SLAM' stand for?",
    category: robotics,
    correct_answer: "Simultaneous Localization and Mapping",
    incorrect_answers: [
      "Systematic Linear Algorithm for Machines",
      "Sequential Learning and Modeling",
      "Synchronized Locomotion and Manipulation",
    ],
  },
  {
    id: 89,
    difficulty: "Medium",
    question:
      "Which type of robot is designed to mimic the appearance and behavior of humans or animals?",
    category: robotics,
    correct_answer: "Humanoid Robot",
    incorrect_answers: [
      "Industrial Robot",
      "Medical Robot",
      "Autonomous Robot",
    ],
  },
  {
    id: 90,
    difficulty: "Easy",
    question:
      "What does the acronym 'IoT' stand for in the context of robotics and technology?",
    category: robotics,
    correct_answer: "Internet of Things",
    incorrect_answers: [
      "Integrated Operating Technology",
      "Innovative Organizational Tools",
      "Intelligent Output Transmitter",
    ],
  },
  {
    id: 91,
    difficulty: "Medium",
    question:
      "Which robotic mission successfully landed a rover named 'Perseverance' on Mars in 2021?",
    category: robotics,
    correct_answer: "NASA's Mars 2020 mission",
    incorrect_answers: [
      "ESA's ExoMars mission",
      "ISRO's Mars Orbiter Mission",
      "CNSA's Tianwen-1 mission",
    ],
  },
  {
    id: 92,
    difficulty: "Hard",
    question: "What is the purpose of a haptic feedback system in robotics?",
    category: robotics,
    correct_answer: "Providing a sense of touch",
    incorrect_answers: [
      "Enhancing vision capabilities",
      "Improving auditory perception",
      "Optimizing smell detection",
    ],
  },
];
