using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DemoWithUsers.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Price { get; set; }

        //Hur många gånger folk har köpt appen
        public int Purchases { get; set; }

        public string ImageUrl { get; set; }
    }
}