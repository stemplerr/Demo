using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using Newtonsoft.Json;

namespace Posts.API
{
    public class PostsRepository
    {
        public static IEnumerable<Post> GetPosts()
        {
            using (var client = new WebClient())
            {
                string json = client.DownloadString("http://ec.planaby.com/woman/ra/Person/369/posts.json");
                return JsonConvert.DeserializeObject<IEnumerable<Post>>(json);
            }
        }

        public static Post GetPlan()
        {
            using (var client = new WebClient())
            {
                string json = client.DownloadString("http://ec.planaby.com/woman/ra/Mtly/2241.json");
                return JsonConvert.DeserializeObject<Post>(json);
            }
        }
    }
}
