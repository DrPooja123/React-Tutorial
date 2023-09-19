import React from 'react'

const Home = () => {
    const name='Ravi'
    const arr=["John" ,50,"Mumbai"]
    const Age=7;
  return (
    <div class="bg-green-500">
    <div className="text-blue-500 text-3xl "> Home</div>
    <h1>Welcome {name}</h1>
    <h1>{78*5}</h1>
    <h2>Name:  {arr[0]} , Age: {arr[1]} , City: {arr[2]}</h2>
    <h2>{(Age>18)?"You can Vote":"Cant Vote"}</h2>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, doloribus eum, quas veritatis sequi unde temporibus totam, error ipsa consequuntur deserunt deleniti culpa nam ducimus enim dolorem repellat ipsum libero. Molestiae quos sint incidunt reiciendis distinctio iusto quasi officiis consequatur. Placeat, hic quidem minima ut alias esse, consequuntur magnam obcaecati itaque cum doloribus perspiciatis, blanditiis magni accusamus impedit tenetur? Voluptatibus minus quos rerum delectus necessitatibus impedit quasi fugit harum cum itaque, ea vitae sequi qui magnam possimus sapiente aperiam illum hic laboriosam eligendi soluta laborum ullam et suscipit. Corporis eos magnam laudantium ex asperiores eum ducimus? Eos, cum. In perspiciatis placeat aperiam tenetur rerum voluptate, eius, quam dolorem, error voluptas necessitatibus soluta dignissimos. Non repellat architecto soluta quae, eum excepturi praesentium, saepe sint placeat eius voluptatem, quas temporibus obcaecati debitis corporis magni dolores! Dolores ea rem necessitatibus officiis perspiciatis in, voluptas hic deleniti ducimus omnis cupiditate, error, minima dignissimos corrupti? Vero minus corporis numquam eos rem corrupti esse. Cupiditate facilis tempore animi. Sit minus culpa dolorem debitis placeat, sequi sunt beatae, neque iste distinctio dolorum nemo molestiae, rerum tempora similique corrupti error? Laborum veniam fugiat autem cumque maiores minima corporis provident vero atque. Ut autem rem, magni cumque est corrupti.</div>
    
    </div>
  )
}

export default Home