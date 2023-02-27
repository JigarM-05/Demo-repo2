function Node(val,next)
{
    this.val = val;
    this.next = next;
}

let list1 = [1,2,4,5]

let head = null
console.log(list1.length)
for(let i=0;i<list1.length;i++)
{
        let node = new Node(list1[i],head)

        console.log(node)
        
        head = node
}

let temp = head

while(temp!=null)
{
    console.log(`temp.val = ${temp.val} temp.next = ${temp.next}`)
    temp = temp.next
}