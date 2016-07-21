using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Posts.API
{
    public class Venue
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("lat")]
        public decimal Latitude { get; set; }
        [JsonProperty("lon")]
        public decimal Longitude { get; set; }
        [JsonProperty("address")]
        public string Address { get; set; }
    }
}
