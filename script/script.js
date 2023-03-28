console.log("Tragoriano")

let text = document.getElementById("livelli__magia")
let textMagia = document.getElementById("magie")
let idMagia = ""
menteStorage()
livelloSpell()
generaLivelliMagia()

function livelloSpell() {
    if (!localStorage.livelloSpell) {
        localStorage.livelloSpell = 0;
    }
};


function menteStorage() {
    if (!localStorage.mente) {
        localStorage.mente = 0;
    }
    stampaMente();
};

function stampaMente() {
    document.getElementById("mente").innerHTML = localStorage.mente;
}

function cambiaMente(plusMinus) {
    if (plusMinus == "+") {
        localStorage.mente++

    }
    if (plusMinus == "-") {
        localStorage.mente--
        if (localStorage.mente < 0)
            localStorage.mente = 0
    }
    if (localStorage.livelloSpell != 0) {
        textMagia.innerHTML = "";
        vaiAllaSpell(localStorage.livelloSpell)
    }

    stampaMente()
}


function generaLivelliMagia() {


    for (let i = 0; i < 6; i++) {
        text.innerHTML += `<span onclick="vaiAllaSpell(${i + 1})" class="style__span">${i + 1}</span>`

    }

}

function vaiAllaSpell(n) {
    localStorage.livelloSpell = n;
    nascondiLivMagia()
    textMagia.innerHTML += `<span class="style__span" onclick="mostraLivMagia()">Torna alla lista magie</span>`
    // let magieSelezionate = tutteLeMagie[n - 1]
    // console.log(magieSelezionate.magia1)
    // for (const [key, value] of Object.entries(magieSelezionate.magia1)) {
    //   textMagia.innerHTML+=`<p> ${key}: ${value}</p>`

    //   }
    let magieSelezionate = contaMagie[n - 1]

    for (const [i, v] of Object.entries(magieSelezionate)) {
        let magiaAttuale = v
        const singolaMagia = document.createElement("div");
        singolaMagia.classList.add("magia__stile");
        singolaMagia.innerHTML = "";
        textMagia.appendChild(singolaMagia);

        for (const [key, value] of Object.entries(magiaAttuale)) {
            singolaMagia.innerHTML += `<p class="magia"> ${key}: ${value}</p>`


            if (key == "memorizzazione") {


                let menteMemorizzazioni = Math.floor(localStorage.mente / value)
                for (let i = 0; i < menteMemorizzazioni; i++) {
                    let nomeMagia = magiaAttuale.nome.replace(/\s/g, '') + (i + 1)

                    singolaMagia.innerHTML += `<span id="${nomeMagia}"  onclick=check(${nomeMagia}) class="fleg">[${i + 1}]</span>`

                    if (localStorage.getItem(nomeMagia)) {
                        document.getElementById(nomeMagia).classList.add("active")
                    }
                }
            }


        }

    }

}

function check(s) {
    nomeVariabile = s.id

    if (s.classList.contains('active')) {
        s.classList.remove('active');
        localStorage.removeItem(nomeVariabile);
    } else {
        s.classList.add('active')
        localStorage.setItem(nomeVariabile, true)
    }
}



function nascondiLivMagia() {
    text.style.display = "none";

}

function mostraLivMagia() {
    text.style.display = "flex";
    textMagia.innerHTML = "";
    localStorage.livelloSpell = 0;

}

function clearAll(){
    localStorage.clear();
    location.reload();
}

let contaMagie = [
    {
        "magia1": {
            "nome": "Protezione da taglio",
            "memorizzazione": 3
        },
        "magia2": {
            "nome": "Scherno di Tragor",
            "memorizzazione": 3
        },
        "magia3": {
            "nome": "Sostegno di Tragor",
            "memorizzazione": 2
        },
        "magia4": {
            "nome": "Spinta di Tragor",
            "memorizzazione": 2
        }
    },
    {
        "magia1": {
            "nome": "Protezione da armi da botta",
            "memorizzazione": 3
        },
        "magia2": {
            "nome": "Protezione da armi da punta",
            "memorizzazione": 3
        },
        "magia3": {
            "nome": "Smantellare",
            "memorizzazione": 2
        },
        "magia4": {
            "nome": "Sferzata",
            "memorizzazione": 3
        }
    },
    {
        "magia1": {
            "nome": "Fermezza di Tragor",
            "memorizzazione": 3
        },
        "magia2": {
            "nome": "Furia Tragoriana",
            "memorizzazione": 3
        },
        "magia3": {
            "nome": "Ispirazione di Tragor",
            "memorizzazione": 4
        },
        "magia4": {
            "nome": "Martelli di Tragor",
            "memorizzazione": 3
        }
    },
    {
        "magia1": {
            "nome": "Destrezza di Tragor",
            "memorizzazione": 3
        },
        "magia2": {
            "nome": "Morsa di Tragor",
            "memorizzazione": 5
        },
        "magia3": {
            "nome": "Raggio Incorporeo",
            "memorizzazione": 4
        },
        "magia4": {
            "nome": "Sporavvivenza di Tragor",
            "memorizzazione": 5
        }
    },
    {
        "magia1": {
            "nome": "Collera di Tragor",
            "memorizzazione": 5
        },
        "magia2": {
            "nome": "Impulso divino",
            "memorizzazione": 5
        },
        "magia3": {
            "nome": "Invocazione di Tragor",
            "memorizzazione": 4
        },
        "magia4": {
            "nome": "Rafforzamento di Tragor",
            "memorizzazione": 3
        }
    },
    
    {
        "magia1": {
            "nome": "Colpo di Grazia",
            "memorizzazione": 5
        },
        "magia2": {
            "nome": "Corno di Tragor",
            "memorizzazione": 7
        },
        "magia3": {
            "nome": "Fervore Tragoriano",
            "memorizzazione": 4
        },
        "magia4": {
            "nome": "Punizione di Tragor",
            "memorizzazione": 5
        }
    }
    
]

let tutteLeMagie = [
    {
        "livello": 1,
        "magia1": {
            "nome": "Protezione da armi da taglio",
            "testo": "Per tutta la durata dell’incantesimo, chiunque attaccherà il chierico con un’arma da taglio, subirà un malus di tre punti sull’attacco.",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": "personale",
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "Scherno di Tragor",
            "testo": "Il bersaglio dell’incantesimo dovrà effettuare un lancio su 1d generico; con un risultato di tre o meno, l’arma verrà immediatamente distrutta. Il bersaglio dell’incantesimo deve essere visibile.",
            "categoria": "Arcano d'effetto alternativo",
            "tempi di lancio": 1,
            "gittata": "ovunque sul campo",
            "durata": "istantanea",
            "memorizzazione": 3,
            "specifiche": "influenza,no armi magiche, Inarrestabile"
        }, "magia3": {
            "nome": "Sostegno di Tragor",
            "testo": "Bonus di +3 all’attacco",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": "personale",
            "durata": "1d6+1",
            "memorizzazione": 2,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "Spinta di Tragor",
            "testo": "2d da combattimento di danno, inoltre, la vittima dell’incantesimo dovrà effettuare un tiro-equilibrio. Il bersaglio dell’incantesimo deve essere visibile.",
            "categoria": "Arcano d'offesa",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "istantanea",
            "memorizzazione": 2,
            "specifiche": "influenza, no effetto ultraumane"
        },

    },
    {
        "livello": 2,
        "magia1": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia3": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },

    },
    {
        "livello": 3,
        "magia1": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia3": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },

    },
    {
        "livello": 4,
        "magia1": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia3": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },

    },
    {
        "livello": 5,
        "magia1": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia3": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },

    },
    {
        "livello": 6,
        "magia1": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },
        "magia2": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia3": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        }, "magia4": {
            "nome": "nome1",
            "testo": "fa questo",
            "categoria": "Arcano Potenziale",
            "tempi di lancio": 1,
            "gittata": 10,
            "durata": "1d6+1",
            "memorizzazione": 3,
            "specifiche": "influenza"
        },

    },

]


