export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
};

export const recommendedSongs: Song[] = [
  {
    id: "1",
    title: "What Was I Made For",
    artist: "Billie Eilish",
    duration: "3:41",
    image: "https://i.discogs.com/v_6VkfUtMwhup5dqg5KSWUHJkm9aAND5GtaC2VfGnPE/rs:fit/g:sm/q:90/h:440/w:440/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjYz/MzY2LTE2ODkyNTgx/NjAtOTcyNy5qcGVn.jpeg"
  },
  {
    id: "2",
    title: "Back to Life",
    artist: "Willy Crook",
    duration: "4:05",
    image: "https://i.discogs.com/PBwGN1YmD4g280VmtsW7qnI7pLQAqUYojOcygoAgkjs/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MzQ1/MjgtMTQ4MDUyMjMz/MS02MjQwLmpwZWc.jpeg"
  },
  {
    id: "3",
    title: "Same",
    artist: "Militantes del Clímax",
    duration: "3:15",
    image: "https://assets.dev-filo.dift.io/img/2024/10/16/tebo2)1244_sq.jpg"
  },
  {
    id: "4",
    title: "Convida",
    artist: "Tiger Mood",
    duration: "2:58",
    image: "https://source.boomplaymusic.com/group10/M00/08/13/4d81f2c80ced4bdfb67c0d00fccbe95d_464_464.webp"
  },
  {
    id: "5",
    title: "Norman Fucking Rockwell",
    artist: "Lana Del Rey",
    duration: "4:10",
    image: "https://i.discogs.com/1H_xFkBXCgrqTpNkz1oz811YnExn_H9zIPPiYOPm_Qg/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDY0/ODkwLTE2NzE4NzQ5/ODQtNTU3Ni5qcGVn.jpeg"
  },
  {
    id: "6",
    title: "Lonely Day",
    artist: "System of a Down",
    duration: "2:48",
    image: "https://i.discogs.com/FoDaJf9mI3ULSkEFnCi_iUuC5s3zUyt57XwVCvgaFls/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0Mjg4/MS0xNTM0OTg2MjA3/LTgyNzIucG5n.jpeg"
  },
  {
    id: "7",
    title: "Us and Them",
    artist: "Pink Floyd",
    duration: "7:50",
    image: "https://i.discogs.com/Bj6ZuzHpjAmyFVVuadbV5IEnZC9xtr4rUIvu2DLnv-c/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTU4/MTMtMTY2MTgwMzk3/OS00NzI3LmpwZWc.jpeg"
  }
];

export const topHits: Song[] = [
  {
    id: "8",
    title: "Tu Falta de Querer",
    artist: "Mon Laferte",
    duration: "4:12",
    image: "https://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeghttps://i.discogs.com/JUNHL9F7U3X-EbJirKfKjXejvl2zqJP2evKVakxo3pg/rs:fit/g:sm/q:90/h:542/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExODE5/ODA5LTE1MjI5NDEx/NDgtNTE1OS5qcGVn.jpeg"
  },
  {
    id: "9",
    title: "Tu Misterioso Alguien",
    artist: "Miranda!",
    duration: "3:33",
    image: "https://i.discogs.com/1qMXiqyzUeofM3SRpnTkDQusZhdyfgAqjBuuChmF3no/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MDk2/MzcyLTE2OTMxNzA0/NzctODAzMS5qcGVn.jpeg"
  },
  {
    id: "10",
    title: "Octavo Día",
    artist: "Shakira",
    duration: "4:00",
    image: "https://i.discogs.com/X3jGvm6c7w5iY9OSSw38aZ-LesfLNbwvDy9hBcizIrg/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkxNTIw/OS0xMTcyMzk1MTYx/LmpwZWc.jpeg"
  },
  {
    id: "11",
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    duration: "5:15",
    image: "https://i.discogs.com/crPq8onc9iU7J3kGyQ-5n9kFyebKxnwGWc1v94SPYXU/rs:fit/g:sm/q:90/h:544/w:544/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5Njcz/NzI1LTE2NzU2MjI2/NjItODA3Ny5qcGVn.jpeg"
  },
  {
    id: "12",
    title: "Dumbai",
    artist: "Ca7riel y Paco Amoroso",
    duration: "3:20",
    image: "https://i.discogs.com/7NVLE6fpRHvWRPKCRSd840_AFkuxtUydGkwMn9exE5E/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMzcz/NDAwLTE3NDE2NjE2/MjUtNTY3Ny5wbmc.jpeg"
  },
  {
    id: "13",
    title: "Ojos Noche",
    artist: "Elsa y Elmar",
    duration: "3:55",
    image: "https://i.discogs.com/3P6LbK8FgX9O0CvWJ0-pTx-Y7Vx_RQDa1ffzzR7ZUuI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMzU0/MzIzLTE3MTI3MTM4/NTgtODc0NC5qcGVn.jpeg"
  },
  {
    id: "14",
    title: "El Lado Oscuro del Corazón",
    artist: "Dante Spinetta",
    duration: "3:50",
    image: "https://i.discogs.com/nSulETpKDa5ENJ9e-Zjim6PUY4xQ0R1lnyGnQg-BFtY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MTg5/MTY4LTE2NzcwODA3/NjEtNzA3NC5qcGVn.jpeg"
  }
];

export const favoriteSongs: Song[] = [
  {
    id: "15",
    title: "Schism",
    artist: "Tool",
    duration: "6:47",
    image: "https://i.discogs.com/-6Georx6flWlLJWFvLPdAk4opSZPbRhBFaLYd1bPpvQ/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3ODMx/Mi0xMjM1NDMyODAw/LmpwZWc.jpeg"
  },
  {
    id: "16",
    title: "Deutschland",
    artist: "Rammstein",
    duration: "5:26",
    image: "https://i.discogs.com/4DO3myfSK_WvUPginCEz2pWiulp9KG5jJg8_Hh3jMJM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDc4/MTE0LTE1NTgwOTMy/MjAtOTg0My5qcGVn.jpeg"
  },
  {
    id: "17",
    title: "Lonely Day",
    artist: "System of a Down",
    duration: "2:48",
    image: "https://i.discogs.com/FoDaJf9mI3ULSkEFnCi_iUuC5s3zUyt57XwVCvgaFls/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0Mjg4/MS0xNTM0OTg2MjA3/LTgyNzIucG5n.jpeg"
  },
  {
    id: "18",
    title: "Dicken Titten",
    artist: "Rammstein",
    duration: "3:45",
    image: "https://townsquare.media/site/366/files/2022/05/attachment-Rammstein-Dicke-Titten-Video.jpg?w=980&q=75"
  },
  {
    id: "19",
    title: "Norman Fucking Rockwell",
    artist: "Lana Del Rey",
    duration: "4:10",
    image: "https://i.discogs.com/1H_xFkBXCgrqTpNkz1oz811YnExn_H9zIPPiYOPm_Qg/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDY0/ODkwLTE2NzE4NzQ5/ODQtNTU3Ni5qcGVn.jpeg"
  },
  {
    id: "20",
    title: "Coming Back to Life",
    artist: "Pink Floyd",
    duration: "6:19",
    image: "https://i.discogs.com/rxaBwL7fB4oxw6u_TDbT8e3dPxbumfHutD-Tw-2c_po/rs:fit/g:sm/q:90/h:526/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4OTI5/MTktMTUxODMyOTUx/My05MTU5LmpwZWc.jpeg"
  },
  {
    id: "21",
    title: "Us and Them",
    artist: "Pink Floyd",
    duration: "7:50",
    image: "https://i.discogs.com/Bj6ZuzHpjAmyFVVuadbV5IEnZC9xtr4rUIvu2DLnv-c/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzOTU4/MTMtMTY2MTgwMzk3/OS00NzI3LmpwZWc.jpeg"
  }
];

export const classicSongs: Song[] = [
  {
    id: "22",
    title: "Last Resort",
    artist: "Papa Roach",
    duration: "3:19",
    image: "https://i.discogs.com/1o1oNFHyNOYkNbvJ-WWatWdZ9EV_QpSMOkFrIn0uKx0/rs:fit/g:sm/q:90/h:515/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMTI1/NzYtMTQ1MzU0NDI1/OC01OTEzLmpwZWc.jpeg"
  },
  {
    id: "23",
    title: "Corazón Partío",
    artist: "Alejandro Sanz",
    duration: "5:45",
    image: "https://i.discogs.com/IBPlvomQHm1PsidakDQL3KiYGcl-lE3sXttX7tNcSik/rs:fit/g:sm/q:90/h:420/w:570/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwOTY5/NjctMTI2NDI3MTcy/Ny5qcGVn.jpeg"
  },
  {
    id: "24",
    title: "Schism",
    artist: "Tool",
    duration: "6:47",
    image: "https://i.discogs.com/-6Georx6flWlLJWFvLPdAk4opSZPbRhBFaLYd1bPpvQ/rs:fit/g:sm/q:90/h:535/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3ODMx/Mi0xMjM1NDMyODAw/LmpwZWc.jpeg"
  },
  {
    id: "25",
    title: "Moscas en la Casa",
    artist: "Shakira",
    duration: "4:50",
    image: "https://i.discogs.com/WMRjm5CnNPJwDETyihMwdRNViCsz2XTZpSvLofOgBSA/rs:fit/g:sm/q:90/h:400/w:397/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMDQz/NjYtMTMyMDM3Mjg2/MC5qcGVn.jpeg"
  },
  {
    id: "26",
    title: "Día de Enero",
    artist: "Shakira",
    duration: "2:30",
    image: "https://i.discogs.com/2vWG0vz0L5Uah0VXjU8P1ar0KkHkGQH0rFgdNXkwD1s/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjgw/NjAtMTQ4NjgwNTM3/Ny0zOTk2LmpwZWc.jpeg"
  },
  {
    id: "27",
    title: "Demoliendo Hoteles",
    artist: "Charly García",
    duration: "3:44",
    image: "https://i.discogs.com/DHOX1cdOoYJu2KDSfNeJok_m37TsEBa2WFDLaIHQDP8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3ODA5/NzUtMTQ2ODY0Mjk5/OS0zMDE4LmpwZWc.jpeg"
  },
  {
    id: "28",
    title: "Lago en el Cielo",
    artist: "Gustavo Cerati",
    duration: "4:03",
    image: "https://i.discogs.com/Bmyu_2Jxb1ODxYsPmcS0SLpPnsnXw94Wh-toqoZVmjM/rs:fit/g:sm/q:90/h:547/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0ODc0/NC0xNTg2Mzk0NjQ1/LTQzMjIuanBlZw.jpeg"
  }
];
