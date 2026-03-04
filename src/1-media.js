// Problem 1: Inheritance and Polymorphism - Media Player
// Implement your MediaItem, Song, Podcast, and Audiobook classes below
class MediaItem {
    constructor(title, duration) {
        this.title = title
        this.duration = duration
    }
    play() {
        return `Playing: ${this.title}`
    }
    getFormattedDuration() {
        const MM = Math.floor(this.duration / 60)
        let SS = this.duration % 60
        if (SS < 10) {
            SS = "0" + SS
        }
        return `${MM}:${SS}`
    }
}
const media = new MediaItem("Unknown Media", 180);
console.log(media); // MediaItem { title: "Unknown Media", duration: 180 }
console.log(media.play()); // "Playing: Unknown Media"
console.log(media.getFormattedDuration()); // "3:00"

class Song extends MediaItem {
    constructor(title, duration, artist) {
        super(title, duration)
        this.artist = artist
    }
    play() {
        return `${super.play()} by ${this.artist}`
    }
}
const song = new Song("Bohemian Rhapsody", 354, "Queen");
console.log(song); // Song { title: "Bohemian Rhapsody", duration: 354, artist: "Queen" }
console.log(song.play()); // "Playing: Bohemian Rhapsody by Queen"
console.log(song.getFormattedDuration()); // "5:54"

class Podcast extends MediaItem {
    constructor(title, duration, host, episodeNumber) {
        super(title, duration)
        this.host = host
        this.episodeNumber = episodeNumber
    }
    play() {
        return `${super.play()} with host ${this.host}, Episode ${this.episodeNumber}`
    }
}
const podcast = new Podcast("Tech Talk", 2400, "Jane Smith", 42);
console.log(podcast);
// Podcast { title: "Tech Talk", duration: 2400, host: "Jane Smith", episodeNumber: 42 }
console.log(podcast.play()); // "Playing: Tech Talk with host Jane Smith, Episode 42"
console.log(podcast.getFormattedDuration()); // "40:00"

class Audiobook extends MediaItem {
    constructor(title, duration, author, narrator) {
        super(title, duration)
        this.author = author
        this.narrator = narrator
    }
    play() {
        return `${super.play()} by ${this.author}, narrated by ${this.narrator}`
    }
}
const audiobook = new Audiobook("The Great Gatsby", 32400, "F. Scott Fitzgerald", "Jake Gyllenhaal");
console.log(audiobook);
// Audiobook { title: "The Great Gatsby", duration: 32400, author: "F. Scott Fitzgerald", narrator: "Jake Gyllenhaal" }
console.log(audiobook.play());
// "Playing: The Great Gatsby by F. Scott Fitzgerald, narrated by Jake Gyllenhaal"
console.log(audiobook.getFormattedDuration()); // "540:00"

const test = () => {
    const song = new Song("Bohemian Rhapsody", 354, "Queen");
    const podcast = new Podcast("Tech Talk", 2400, "Jane Smith", 42);
    const audiobook = new Audiobook("The Great Gatsby", 32400, "F. Scott Fitzgerald", "Jake Gyllenhaal");

    const mediaLibrary = [song, podcast, audiobook];

    // Polymorphism: same method call, different behavior
    mediaLibrary.forEach(media => {
        console.log(media.play());
    });
}
test()
/*
Output:
"Playing: Bohemian Rhapsody by Queen"
"Playing: Tech Talk with host Jane Smith, Episode 42"
"Playing: The Great Gatsby by F. Scott Fitzgerald, narrated by Jake Gyllenhaal"
*/


module.exports = { MediaItem, Song, Podcast, Audiobook };

