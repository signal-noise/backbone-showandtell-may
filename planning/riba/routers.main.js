define([
  'globals',
  'routers/routers.master',
  'views/views.content',
  'views/views.print',
  'views/views.report',
], function(Globals, Master, Content, Print, Report){

  return Master.extend({

    routes: {
      'report' : "report",
      'print(/:page)(/:section)' : "print",
      ':page(/:section)' : "main",
      '*actions' : "default"
    },

    default: function(){...
    },

    print: function(page, section){...
    },

    report: function(){...
    },

    main: function(page, section){
      if (page == this.previousPage) return; // Stop page from rendering twice
      this.previousPage = page;

      var pageModel = Globals.Questions.All.findWhere({"slug": page});
      var sectionData;
      var updateRouter;

      this.page = page;
      this.section = section;
      
      if (!page || !pageModel){
        page = Globals.Questions.All.at(0).get("slug"); // if no page route, get first
        updateRouter = true;
      }
      
      if (!section){
        section = pageModel.get("sections")[0].slug; // if no section route, get first
        updateRouter = true;
      }
            
      if (updateRouter){
        this.navigate(page + "/" + section);
      }

      this.newPage = {
        view: new Content({
          page: page,
          model: pageModel,
        })
      };

      document.title = 'RIBA — ' + pageModel.get('title');
    }
  });

});