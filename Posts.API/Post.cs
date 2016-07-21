using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Posts.API
{
    public class Post
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("author")]
        public Author Author { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("created")]
        public DateTime Date { get; set; }
        [JsonProperty("venue")]
        public Venue Venue { get; set; }
    }
}