
const jokes = [
    'I checked out a book on anti-gravity. I can’t put it down.',
    'I wanted to have a space-themed birthday party, but there was no one to planet.',
    'The scientists’ new paper about alien life forms didn’t get published. It was too far out.',
    'Astronauts are the only people who keep their jobs after they get fired.',
    'Einstein released his theory about space, and it was about time, too!',
    'Not everyone can pull off wearing a spacesuit, but I’m going to rocket.',
    'I’m addicted to space jokes, but someday I’ll over-comet.',
    'My kid is obsessed with the moon. I’m hoping it’s just a phase.',
    'The earth’s rotation really makes my day.',
    'What do astronauts listen to on the radio? Nep-tunes.',
    'What did the astronaut do after he crashed into the moon? He Apollo-gized.',
    'What do aliens say to cats? Take me to your litter.',
    'Why did the restaurant on the moon fail? It had no atmosphere.',
    'How do you keep your pants up in space? With an asteroid belt.',
    'Where do aliens park their spaceships? Next to the parking meteor.',
    'How do you put a baby astronaut to sleep? You rocket.',
    'I went to a space aquarium once. It was otter this world.',
    'What do the papers do when an astronaut dies? They run an orbituary.',
    'Why didn’t the sun go to college? It already has a thousand degrees.',
];

function getJoke() {
    // get random joke
    const jokeIdx = Math.floor(Math.random() * jokes.length); 
    const joke = jokes[jokeIdx];

    // display joke
    document.getElementById('joke').innerHTML = joke;
}
