﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Posts.API;

namespace Demo_7_20.Models
{
    public class HomeViewModel
    {
        public IEnumerable<Post> Posts {get; set;}
    }
}