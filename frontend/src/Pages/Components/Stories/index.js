import React from 'react';
import './style.css';
import Story from './Story/index.js';
const Stories = () => {
  const stories = [
    {
      username:"Amir",
      user_photo: "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/127188272_1805327909621695_9185102195681083491_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4Z-qi6eHL-kAX858uFG&_nc_ht=scontent.ftun10-1.fna&oh=00_AfDlkoQLJbU8cjLuHgmIsySo3bgGXc_8SjVHDaoDsKcIOg&oe=64C9F9A4",
      story_photo: "https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    username:"Zayn",
    user_photo: "https://images.pexels.com/photos/459976/pexels-photo-459976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story_photo: "https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
  username:"Sonda",
  user_photo: "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/166183386_2940610196196436_7320906824657827622_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=17iZBkx3efQAX-25-rk&_nc_ht=scontent.ftun10-1.fna&oh=00_AfBhJ3xmOqyi7N2_rZb_w2ZOsfNDbPRgN8az-f2AoQXrFQ&oe=64CA03C8",
  story_photo: "https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

}]
  return (
    <>
      <div className='stories'>
        <Story type="new" />
        {
          stories.map(story => (
            <Story type="old" data={story}/> 
          ))}
      </div>
    </>
  );
};

export default Stories;
