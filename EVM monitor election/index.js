(() => {
    let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //let abi = '[{"inputs":[{"internalType":"string[]","name":"candidateNames","type":"string[]"},{"internalType":"string[]","name":"candidateParty","type":"string[]"},{"internalType":"string","name":"district","type":"string"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"amountofHours","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"creationDate","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateParty","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidatePartys","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingDistrict","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]';
    //let abi1 = '[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedBallots","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getsDeployedBallots","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[][]","name":"candidates","type":"string[][]"},{"internalType":"string[][]","name":"party","type":"string[][]"},{"internalType":"string[]","name":"district","type":"string[]"},{"internalType":"uint256","name":"hour","type":"uint256"}],"name":"startelec","outputs":[],"stateMutability":"nonpayable","type":"function"}]'//[{"inputs":[{"internalType":"string[]","name":"candidateNames","type":"string[]"},{"internalType":"string[]","name":"candidateParty","type":"string[]"},{"internalType":"string","name":"district","type":"string"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"amountofHours","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"creationDate","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateParty","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidatePartys","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingDistrict","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
    let abi ='[{"inputs":[{"internalType":"string[]","name":"candidateNames","type":"string[]"},{"internalType":"string[]","name":"candidateParty","type":"string[]"},{"internalType":"string","name":"district","type":"string"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"amountofHours","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"creationDate","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateParty","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidatePartys","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingDistrict","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'// '[{"inputs":[{"internalType":"string[]","name":"candidateNames","type":"string[]"},{"internalType":"string[]","name":"candidateParty","type":"string[]"},{"internalType":"string","name":"district","type":"string"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"amountofHours","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"creationDate","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateParty","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidatePartys","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingDistrict","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'//[{"inputs":[{"internalType":"string[]","name":"candidateNames","type":"string[]"},{"internalType":"string[]","name":"candidateParty","type":"string[]"},{"internalType":"string","name":"district","type":"string"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"uint256","name":"amountofHours","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidates","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"party","type":"string"},{"internalType":"uint256","name":"voteCount","type":"uint256"},{"internalType":"uint256","name":"creationDate","type":"uint256"},{"internalType":"uint256","name":"expirationDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCandidateParty","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCandidatePartys","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVoteCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"voters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"votingDistrict","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
 

    web3.eth.defaultAccount = web3.eth.accounts[0];
    //web3.personal.unlockAccount(web3.eth.accounts[0], YOUR_NODE_PASSWORD, 0);
    let account = '0x2E2f00fF3F9Ea2C7DC7859Dbb1027e743C486602'
    const tableElem = document.getElementById("table-body");
    const candidateOptions = document.getElementById("candidate-options");
    const voteForm = document.getElementById("vote_form");
    
    function handleVote(evt) {
      const candidate = new FormData(evt.target).get("candidate");
      BallotContract.vote(candidate, {from: web3.eth.accounts[0]}, function() {
        const votes = BallotContract.getVoteCount.call(candidate);
    
        // Updates the vote element.
        document.getElementById("vote-" + candidate).innerText = votes;
      });
    }
    var len=0;
    var candidateNames=[]
    var candidatePartys=[]
    const getCandidateData = async() =>{
        const BallotContract = await new web3.eth.Contract(JSON.parse(abi),'0x137650e7424CA02a09682f9382C1B7a376830172');
        console.log(BallotContract)
        const numberOfCandidates = await BallotContract.methods.getLength().call({from : account, gas: 6000000})//.send({from : account, gas: 6000000}); // call() is used for sync read only calls.
        len = numberOfCandidates;
        console.log(numberOfCandidates)
        var i=0;
        for(i=0;i<numberOfCandidates-1;i++)
            candidateNames[i] = await BallotContract.methods.getCandidateName(i).call({from : account, gas: 6000000})
        for(i=0;i<numberOfCandidates-1;i++)
            candidatePartys[i] = await BallotContract.methods.getCandidateParty(i).call({from : account, gas: 6000000})
        candidateNames[i] = await BallotContract.methods.getCandidateName(i).call({from : account, gas: 6000000})
        candidatePartys[i] = await BallotContract.methods.getCandidateParty(i).call({from : account, gas: 6000000})
        console.log(candidateNames)
        console.log(candidatePartys)
        populateCandidates()
    }
    
    //voteForm.addEventListener("voting", handleVote, false);
    //const secondFunction = async () => {
    const populateCandidates = async() =>  {
          // console.log(BallotContract)

          for(i=0;i<len;i++){
            // Creates a row element.

        const candidateName = candidateNames[i]
        const candidateParty = candidatePartys[i]
        //const votes = BallotContract.getVoteCount().call(candidate);

        const rowElem = document.createElement("tr");
    
        // Creates a cell element for the name.
        const nameCell = document.createElement("td");
        nameCell.innerText = candidateName;

        const partyCell = document.createElement("td")
        partyCell.innerText = candidateParty
        const indexCell = document.createElement("td")
        indexCell.innerText = i

        rowElem.appendChild(indexCell)
        rowElem.appendChild(nameCell)
        rowElem.appendChild(partyCell);
    
        // Creates a cell element for the votes.
        /*const voteCell = document.createElement("td");
        voteCell.id = "vote-" + candidate; 
        voteCell.innerText = votes;
        rowElem.appendChild(voteCell);
    */
        // Adds the new row to the voting table.
        const tableElem = document.getElementById("table")
        //console.log(tableElem)
        tableElem.appendChild(rowElem);
    
        // Creates an option for each candidate
        //const candidateOption = document.createElement("option");
        //candidateOption.value = candidate;
        //candidateOption.innerText = candidateName;
        //candidateOptions.appendChild(candidateOption);
          }
   /*
      candidateNames.forEach((candidate) => {
        const candidateName = web3.toUtf8(candidate);
        const votes = BallotContract.getVoteCount().call(candidate);
        
        // Creates a row element.
        const rowElem = document.createElement("tr");
    
        // Creates a cell element for the name.
        const nameCell = document.createElement("td");
        nameCell.innerText = candidateName;
        rowElem.appendChild(nameCell);
    
        // Creates a cell element for the votes.
        const voteCell = document.createElement("td");
        voteCell.id = "vote-" + candidate; 
        voteCell.innerText = votes;
        rowElem.appendChild(voteCell);
    
        // Adds the new row to the voting table.
        tableElem.appendChild(rowElem);
    
        // Creates an option for each candidate
        const candidateOption = document.createElement("option");
        candidateOption.value = candidate;
        candidateOption.innerText = candidateName;
        candidateOptions.appendChild(candidateOption);
      });*/
    }
    const populateCandidatesparty = async() => {
      const candidateList = BallotContract.methods.getCandidatePartys().call(); // call() is used for sync read only calls.
      candidateList.forEach((candidate) => {
        //const candidateName = web3.toUtf8(candidate);

        // Creates a row element.
        const rowElem = document.createElement("tr");
    
        // Creates a cell element for the name.
        const nameCell = document.createElement("td");
        nameCell.innerText = candidateName;
        rowElem.appendChild(nameCell);
    
    
        // Adds the new row to the voting table.
        tableElem.appendChild(rowElem);
      });
    }
    function doAdelay(){
    setInterval(function(){populateCandidates()},10000);
    
};

function submitVote(){
    var index=1 //= document.getElementById("index")
    //index = index.val();
    console.log(index)
}

//doAdelay()
//populateCandidates()
  
getCandidateData()  
submitVote()
  //  populateCandidatesparty(); 
    })();