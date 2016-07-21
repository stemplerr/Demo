using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Posts.API;
using Demo_7_20.Models;

namespace Demo_7_20.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            HomeViewModel vm = new HomeViewModel();
            vm.Posts =  PostsRepository.GetPosts().ToList();
            return View(vm);
        }
        public ActionResult Details()
        {
            DetailsViewModel vm = new DetailsViewModel();
            vm.Post = PostsRepository.GetPlan();
            return View(vm);
        }

    }
}
