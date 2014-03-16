// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var hulkTheButton = function(){

  var newForm = document.createElement('div');
  newForm.innerHTML = '<input type="submit" value="Buy Now" class="btn btn-success litb-icon-buy-now">';
  newForm.className="order-actions";
  var productId=638761;
  var ruleId=39456;
  var data_json = '{"url":"http:\\/\\/www.miniinthebox.com\\/index.php?main_page=info_check&action=super_sale_join","url1":"http:\\/\\/www.miniinthebox.com\\/index.php?main_page=info_check&action=super_sale_winner","data":{"products_id":"{0}","ruleid":{1}}}'.format(productId, ruleId);
  newForm.setAttribute("data-json", data_json);
  var addToCartForm = document.getElementsByClassName('order-actions')[0];
  console.log(addToCartForm);
  addToCartForm.parentNode.replaceChild(newForm, addToCartForm);
  console.log(addToCartForm);
};

hulkTheButton();
