function to_ul(branches) {
    let ul = document.createElement("ul");
    ul.setAttribute('class', 'nested');
    for (let i = 0, n = branches.length; i < n; i++) {
        let branch = branches[i];
        let li = document.createElement("li");
        let spn = document.createElement('span');
        spn.setAttribute('class', 'caret');
        let text = document.createTextNode(branch.name);
        li.appendChild(spn);
        spn.appendChild(text);
        if (branch.branches) {
            li.appendChild(to_ul(branch.branches));
            li.setAttribute('class', 'folder');
        } else {
            li.setAttribute('class', 'file');
        }
        ul.appendChild(li);
    }
    return ul;
}

function renderTree() {
    let treeEl = document.getElementById("tree");
    let treeObj = {
        root: [{
            name: "Root directory",
            branches: [{
                    name: "Work Document",
                    branches: [{
                            name: "Function Specififcations",
                            branches: [{
                                name: "TrieView spec"
                            }]
                        },
                        {
                            name: "Feture Schedule"
                        },
                        {
                            name: "Overal Project Plan"
                        },
                        {
                            name: "Feature Resource allocation"
                        }
                    ]
                },
                {
                    name: "Personal Folder",
                    branches: [{
                        name: "Home Remodal Folder",
                        branches: [{
                                name: "File 1.1"
                            },
                            {
                                name: "File 1.2"
                            },
                            {
                                name: "File 1.3"
                            },
                            {
                                name: "File 1.4"
                            }
                        ]
                    }]
                }
            ]
        }]
    };
    treeEl.appendChild(to_ul(treeObj.root));
}

renderTree();

let toggler = document.getElementsByClassName("caret");
for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        console.log(this.classList.toggle("caret-down"));
    });
}

let fchild = document.getElementById('tree').firstChild.setAttribute('class', 'net');