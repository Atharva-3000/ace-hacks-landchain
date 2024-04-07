// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AceHacks is ERC721, Ownable {
    // Remove the constructor parameter if not needed
    constructor() ERC721("RegistrationNFT", "REG") Ownable(msg.sender) {}

    // Define a struct to store individual's details
    struct Individual {
        string ULPIN;
        string name;
        uint contact;
        uint aadharNumber;
        string plotNo;
        string propAddress;
    }

    // Mapping to store individuals' details
    mapping(bytes32 => bool) public individualExists;

    // Function to add individual's details and mint an NFT
    function addToRegister(
        string memory _ULPIN,
        string memory _name,
        uint _contact,
        uint _aadharNumber,
        string memory _plotNo,
        string memory _propAddress
    ) public {
        bytes32 uniqueKey = keccak256(abi.encodePacked(_ULPIN, _name, _contact, _aadharNumber, _plotNo, _propAddress));
        require(!individualExists[uniqueKey], "Individual already exists");

        // Create a new Individual object
        Individual memory newIndividual = Individual({
            ULPIN: _ULPIN,
            name: _name,
            contact: _contact,
            aadharNumber: _aadharNumber,
            plotNo: _plotNo,
            propAddress: _propAddress
        });

        // Mint a new NFT and associate the individual's unique key as token ID
        _mint(msg.sender, uint(uniqueKey));
        individualExists[uniqueKey] = true;
    }

    // function getAllRecords() public view returns (Individual[] memory) {
    //     return Individual;
    // }
}