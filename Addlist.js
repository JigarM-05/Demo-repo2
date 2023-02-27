class Node
{
    constructor(data,next) 
    {
        this.data = data;
        this.next = next;    
    }
}


function insert(data,l1head)
{
    let n;

    if(l1head == null)
    {
        n = new Node(data);
        
        l1head = n;

    }else
    {
        let temp = l1head;
        let lnode;
        
        while(temp != null)
        {
            lnode = temp;
            temp = temp.next;
        }

        n = new Node(data,null);

        lnode.next = n;

    }
}

function display(l1head)
{
    let temp = l1head;
    while(temp != null)
    {
        console.log(`data ${temp.data}`);
        temp = temp.next;
    }   
}

function add(data,index)
{   
    
}

var head = null;
var l1head = null;
var l2head = null;
let list = [1,2,3,5];

list.forEach(element=> {
    insert(element,l1head);
});

console.log(l1head);

display(l1head);