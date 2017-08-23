import {PredicateVisitor} from './predicate.visitor';

function valueFactory() {
	return (value) => value;
}
describe('PredicateVisitor', () => {

	describe('visitGroup', () => {
		it('check for equality with op = "and"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'equals',
					right: 123,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'equals',
					right: 123,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(123);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "or"', () => {
			let group = {
				kind: 'group',
				op: 'or',
				right: {
					kind: 'condition',
					op: 'equals',
					right: 'Some string',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'equals',
					right: 123,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(123);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "notEquals"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'notEquals',
					right: 123,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'notEquals',
					right: 123,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(999);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "greaterThan"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'greaterThan',
					right: 123,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'greaterThan',
					right: 123,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(999);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "lessThan"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'lessThan',
					right: 123,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'lessThan',
					right: 123,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(1);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "between"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'between',
					right: [10, 20],
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'between',
					right: [10, 20],
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(15);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check for equality with op = "in"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'between',
					right: [10, 20],
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'between',
					right: [10, 20],
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(15);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('check whether "findSomeString" contains "Some"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'like',
					right: 'Some',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'like',
					right: 'Some',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo('findSomeString');
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('"findSomeString" should not contains "text"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'notLike',
					right: 'text',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'notLike',
					right: 'text',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo('findSomeString');
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('"findSomeString" should starts with "find"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'startsWith',
					right: 'find',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'startsWith',
					right: 'find',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo('findSomeString');
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('"findSomeString" should ends with "String"', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'endsWith',
					right: 'String',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'endsWith',
					right: 'String',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo('findSomeString');
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('should return true if 101 greater than or equals 100', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'greaterThanOrEquals',
					right: 100,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'greaterThanOrEquals',
					right: 100,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(101);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('should return true if 99 less than or equals 100', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'lessThanOrEquals',
					right: 100,
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'lessThanOrEquals',
					right: 100,
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(99);
			expect(res).to.equal(true);
		});
	});

	describe('visitGroup', () => {
		it('should return value if not null', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'isNotNull',
					right: '',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'isNotNull',
					right: '',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo('NotNull');
			expect(res).to.equal('NotNull');
		});
	});

	describe('visitGroup', () => {
		it('should return true if null', () => {
			let group = {
				kind: 'group',
				op: 'and',
				right: {
					kind: 'condition',
					op: 'isNull',
					right: '',
					left: 'value'
				},
				left: {
					kind: 'condition',
					op: 'isNull',
					right: '',
					left: 'value'
				}
			};
			let predicateVisitor = new PredicateVisitor(valueFactory);
			let foo = predicateVisitor.visitGroup(group);
			let res = foo(null);
			expect(res).to.equal(true);
		});
	});

});

