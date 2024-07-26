### BBS Vanced
BBS Vanced is my current main 'playground' project. It started as a simple viewer tool to quickly see your personalised timetable of my school.
Later I added more features like a shared exam calendar and an Abitur grade calculator. The entire project is written in TypeScript with SvelteKit
to make sure it works across platforms and I do not have to deal with the App Store.

When I started to allow users to add exams to be shown alongside the timetable, I needed a backend solution. As I was already using a full
framework with server-side capabilities I decided to go with a simple self-hosted PocketBase backend. I started to introduce pro features to cover
server costs, which has allowed me to learn about payment processing (I used PayPal)

[Source Code](https://github.com/niwla23/bbs-vanced)
