		while (true) {
			var nextLvTwo = saveLv.next();
			
			if (nextLvTwo.attr("id") == "Three" || nextLvTwo.attr("id") == "addThree") {
				nextLvTwo.remove();
			} else {
				break;
			}
			saveLv.remove();
		}