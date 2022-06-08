function deck(cards) {
    let result = [];

    for (let cardAsString of cards) {
        const face = cardAsString.slice(0, -1);
        const suit = cardAsString.slice(-1);

        try {
            const card = creteCard(face, suit);
            result.push(card);
        }
        catch (err) {
            result = ['Invalid card: ' + cardAsString]
        }
    }

    console.log(result.join(' '));
    function creteCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        if (faces.indexOf(face) == -1) {
            throw new Error("Invalid face: " + face);
        }
    
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if (suits[suit] == undefined) {
            throw new Error('Invalid suit: ' + face);
        }
    
        const result = {
            face,
            suit: suits[suit],
            toString() {return this.face + this.suit}
        };
    
        return result
    }
}