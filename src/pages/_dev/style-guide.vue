<template>
	<div class="theming-container ui container"><h1 class="docs-header">Theming Examples</h1>
		<h2 class="ui dividing header">Site</h2>
		<div class="ui three column stackable grid">
			<div class="column"><h1 class="ui header">Heading 1</h1>
				<h2 class="ui header">Heading 2</h2>
				<h3 class="ui header">Heading 3</h3> <h4 class="ui header">Heading 4</h4> <h5 class="ui header">Heading
					5</h5>
				<p>
					Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur ridiculus
					mus. Nullam id dolor id nibh ultricies vehicula.
				</p></div>
			<div class="column"><h2>Example body text</h2>
				<p>
					Nullam quis risus eget
					<a href="javascript:void 0">urna mollis ornare</a>
					vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
					vehicula.
				</p>
				<p>
					<small>This line of text is meant to be treated as fine print.</small>
				</p>
				<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
				<p>The following snippet of text is <em>rendered as italicized text</em>.</p>
				<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p></div>
			<div class="column">
				<div class="docs-color-grid ui three column stackable padded middle aligned centered grid">
					<div class="red column">Red</div>
					<div class="orange column">Orange</div>
					<div class="yellow column">Yellow</div>
					<div class="olive column">Olive</div>
					<div class="green column">Green</div>
					<div class="teal column">Teal</div>
					<div class="blue column">Blue</div>
					<div class="violet column">Violet</div>
					<div class="purple column">Purple</div>
					<div class="pink column">Pink</div>
					<div class="brown column">Brown</div>
					<div class="grey column">Grey</div>
					<div class="black column">Black</div>
				</div>
			</div>
		</div>
		<h2 class="ui dividing header">Menu</h2>
		<div>
			<div class="ui menu">
				<div class="header item">Brand</div>
				<a class="active item">Link</a> <a class="item">Link</a>
				<div role="listbox" tabindex="0" class="ui dropdown item" text="Dropdown">
					<div role="alert" aria-live="polite" class="text">Dropdown</div>
					<i aria-hidden="true" class="dropdown icon"></i><span class="sizer"></span>
					<div tabindex="-1" class="menu transition">
						<div role="option" class="item">Action</div>
						<div role="option" class="item">Another Action</div>
						<div role="option" class="item">Something else here</div>
						<div role="option" class="divider"></div>
						<div role="option" class="item">Separated Link</div>
						<div role="option" class="divider"></div>
						<div role="option" class="item">One more separated link</div>
					</div>
				</div>
				<div class="right menu">
					<div class="item">
						<div class="ui action left icon input" placeholder="Submit"><input type="text"
						                                                                   placeholder="Submit"><i
							class="search icon"></i>
							<button role="button" class="ui button">Submit</button>
						</div>
					</div>
					<a class="item">Link</a></div>
			</div>
			<div class="ui inverted menu">
				<div class="header item">Brand</div>
				<a class="active item">Link</a> <a class="item">Link</a>
				<div role="listbox" tabindex="0" class="ui dropdown item" text="Dropdown">
					<div role="alert" aria-live="polite" class="text">Dropdown</div>
					<i aria-hidden="true" class="dropdown icon"></i><span class="sizer"></span>
					<div tabindex="-1" class="menu transition">
						<div role="option" class="item">Action</div>
						<div role="option" class="item">Another Action</div>
						<div role="option" class="item">Something else here</div>
						<div role="option" class="divider"></div>
						<div role="option" class="item">Separated Link</div>
						<div role="option" class="divider"></div>
						<div role="option" class="item">One more separated link</div>
					</div>
				</div>
				<div class="right menu">
					<div class="item">
						<div class="ui transparent inverted icon input" placeholder="Submit"><input type="text"
						                                                                            placeholder="Submit"><i
							class="search icon"></i></div>
					</div>
					<a class="item">Link</a></div>
			</div>
			<div class="ui secondary menu">
				<div class="active item">Link</div>
				<a class="item">Link</a>
				<div class="right menu menu">
					<div class="item">
						<div class="ui action left icon input" placeholder="Search"><input type="text"
						                                                                   placeholder="Search"><i
							class="search icon"></i>
							<button role="button" class="ui button">Submit</button>
						</div>
					</div>
					<a class="item">Link</a></div>
			</div>
			<div class="ui three column doubling grid">
				<div class="column">
					<div class="ui secondary pointing menu">
						<div class="active item">Link</div>
						<a class="item">Link</a> <a class="item">Link</a></div>
				</div>
				<div class="column">
					<div class="ui tabular menu">
						<div class="active item">Link</div>
						<a class="item">Link</a> <a class="item">Link</a></div>
				</div>
				<div class="column">
					<div class="ui pointing menu">
						<div class="active item">Link</div>
						<a class="item">Link</a>
						<div class="right item">
							Right Text
						</div>
					</div>
				</div>
			</div>
			<div style="clear: both; display: block;"></div>
		</div>
		<h2 class="ui dividing header">Buttons</h2>
		<div>
			<div class="ui stackable equal width grid">
				<div class="column">
					<button role="button" class="ui button">Default</button>
					<button role="button" class="ui primary button">Primary</button>
					<button role="button" class="ui secondary button">Secondary</button>
					<button role="button" class="ui basic button">Basic</button>
					<button role="button" class="ui compact button">
						Compact
					</button>
					<div class="ui divider"></div>
					<button role="button" class="ui icon button"><i class="heart icon"></i></button>
					<button role="button" class="ui icon left labeled button"><i class="heart icon"></i>Labeled</button>
					<button role="button" class="ui icon right labeled button"><i class="heart icon"></i>Labeled
					</button>
					<div class="ui divider"></div>
					<div class="ui buttons">
						<button role="button" class="ui button">Combo</button>
						<div role="listbox" tabindex="0" class="ui button floating dropdown"><i aria-hidden="true"
						                                                                        class="dropdown icon"></i><span
							class="sizer"></span>
							<div tabindex="-1" class="menu transition">
								<div role="option" class="item">Choice 1</div>
								<div role="option" class="item">Choice 2</div>
								<div role="option" class="item">Choice 3</div>
							</div>
						</div>
					</div>
					<div class="ui floating search dropdown button"><input autocomplete="off" tabindex="0"
					                                                       class="search"> <span class="text">Search Dropdown</span>
						<div tabindex="-1" class="menu">
							<div class="item">Arabic</div>
							<div class="item">Chinese</div>
							<div class="item">Danish</div>
							<div class="item">Dutch</div>
							<div class="item">English</div>
							<div class="item">French</div>
							<div class="item">German</div>
							<div class="item">Greek</div>
							<div class="item">Hungarian</div>
							<div class="item">Italian</div>
							<div class="item">Japanese</div>
							<div class="item">Korean</div>
							<div class="item">Lithuanian</div>
							<div class="item">Persian</div>
							<div class="item">Polish</div>
							<div class="item">Portuguese</div>
							<div class="item">Russian</div>
							<div class="item">Spanish</div>
							<div class="item">Swedish</div>
							<div class="item">Turkish</div>
							<div class="item">Vietnamese</div>
						</div>
					</div>
					<div class="ui divider"></div>
					<div class="ui divider"></div>
					<button role="button" class="ui disabled button">Disabled</button>
					<button role="button" class="ui loading button">Loading</button>
					<div class="ui divider"></div>
					<div class="ui buttons">
						<button role="button" class="ui button">1</button>
						<button role="button" class="ui button">2</button>
						<button role="button" class="ui button">3</button>
					</div>
					<div class="ui icon buttons">
						<button role="button" class="ui icon button"><i class="align left icon"></i></button>
						<button role="button" class="ui icon button"><i class="align center icon"></i></button>
						<button role="button" class="ui icon button"><i class="align right icon"></i></button>
						<button role="button" class="ui icon button"><i class="align justify icon"></i></button>
					</div>
					<div class="ui buttons">
						<button role="button" class="ui button">1</button>
						<div class="or"></div>
						<button role="button" class="ui button">2</button>
					</div>
					<div class="ui divider"></div>
					<div class="ui top attached two buttons">
						<div role="button" class="ui button">One</div>
						<div role="button" class="ui button">Two</div>
					</div>
					<div class="ui attached segment"><img src="static/images/wireframes/paragraph.png" class="ui image">
					</div>
					<div class="ui bottom attached two buttons">
						<div role="button" class="ui button">One</div>
						<div role="button" class="ui button">Two</div>
					</div>
				</div>
				<div class="column">
					<button role="button" class="ui mini button">Mini</button>
					<button role="button" class="ui tiny button">Tiny</button>
					<button role="button" class="ui small button">Small</button>
					<button role="button" class="ui large button">Large</button>
					<button role="button" class="ui big button">Big</button>
					<button role="button" class="ui huge button">Huge</button>
					<button role="button" class="ui massive button">Massive</button>
					<div class="ui divider"></div>
					<div class="spaced">
						<button role="button" class="ui yellow button">Yellow</button>
						<button role="button" class="ui orange button">Orange</button>
						<button role="button" class="ui green button">Green</button>
						<button role="button" class="ui teal button">Teal</button>
						<button role="button" class="ui blue button">Blue</button>
						<button role="button" class="ui purple button">Purple</button>
						<button role="button" class="ui pink button">Pink</button>
						<button role="button" class="ui red button">Red</button>
						<button role="button" class="ui black button">Black</button>
					</div>
					<div class="ui divider"></div>
					<div class="ui inverted segment">
						<button role="button" class="ui inverted button">Inverted</button>
						<button role="button" class="ui basic inverted button">Basic</button>
						<button role="button" class="ui blue inverted button">Colored</button>
						<button role="button" class="ui basic blue inverted button">
							Basic Colored
						</button>
					</div>
				</div>
			</div>
			<div style="clear: both; display: block;"></div>
		</div>
		<h2 class="ui dividing header">Table</h2>
		<div>
			<div class="ui two column relaxed grid">
				<div class="column">
					<table class="ui right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui right aligned celled table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td class="positive">15</td>
							<td class="negative">26g</td>
							<td class="warning">8g</td>
						</tr>
						<tr class="positive">
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr class="negative">
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr class="warning">
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr class="active">
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui basic right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui very basic right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui celled selectable right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui striped right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui padded celled right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui definition celled right aligned table">
						<thead>
						<tr>
							<th></th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui inverted right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<table class="ui inverted blue selectable celled right aligned table">
						<thead>
						<tr>
							<th class="left aligned">
								Person
							</th>
							<th>Calories</th>
							<th>Fat</th>
							<th>Protein</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="left aligned">Drema</td>
							<td>15</td>
							<td>26g</td>
							<td>8g</td>
						</tr>
						<tr>
							<td class="left aligned">Nona</td>
							<td>11</td>
							<td>21g</td>
							<td>16g</td>
						</tr>
						<tr>
							<td class="left aligned">Isidra</td>
							<td>34</td>
							<td>43g</td>
							<td>11g</td>
						</tr>
						<tr>
							<td class="left aligned">Bart</td>
							<td>41</td>
							<td>40g</td>
							<td>30g</td>
						</tr>
						<tr>
							<td class="left aligned">Nguyet</td>
							<td>41</td>
							<td>44g</td>
							<td>28g</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div style="clear: both; display: block;"></div>
		</div>
		<h2 class="ui dividing header">Input</h2>
		<div>
			<div class="ui two column stackable grid">
				<div class="column">
					<div class="ui left icon input" placeholder="Search..."><input type="text"
					                                                               placeholder="Search..."><i
						class="search icon"></i></div>
					<div class="ui action left icon input"><i class="search icon"></i> <input type="text"
					                                                                          placeholder="Search...">
						<div class="ui teal button">Search</div>
					</div>
					<div class="ui divider"></div>
					<div class="ui error input" placeholder="Search..."><input type="text" placeholder="Search...">
					</div>
					<div class="ui divider"></div>
					<div class="ui right labeled input"><input placeholder="Placeholder" type="text">
						<div tabindex="0" class="ui dropdown label">
							<div class="text">Dropdown</div>
							<i class="dropdown icon"></i>
							<div tabindex="-1" class="menu">
								<div class="item">Choice 1</div>
								<div class="item">Choice 2</div>
								<div class="item">Choice 3</div>
							</div>
						</div>
					</div>
					<div class="ui divider"></div>
					<div class="ui transparent icon input" placeholder="Search..."><input type="text"
					                                                                      placeholder="Search..."><i
						class="search icon"></i></div>
					<div class="ui transparent left icon input" placeholder="Search..."><input type="text"
					                                                                           placeholder="Search..."><i
						class="search icon"></i></div>
					<div class="ui divider"></div>
					<div class="ui loading left icon input" placeholder="Loading..."><input type="text"
					                                                                        placeholder="Loading..."><i
						class="loading icon"></i></div>
					<div class="ui loading icon input" placeholder="Loading..."><input type="text"
					                                                                   placeholder="Loading..."><i
						class="loading icon"></i></div>
				</div>
				<div class="column">
					<div class="ui right labeled left icon input"><i class="tags icon"></i> <input
						placeholder="Enter tags" type="text"> <a class="ui tag label">
						Add Tag
					</a></div>
					<div class="ui divider"></div>
					<div class="ui labeled input"><a class="ui label">
						Label
					</a> <input type="text" placeholder="Placeholder..."></div>
					<div class="ui divider"></div>
					<div class="ui right labeled input"><input type="text" placeholder="Placeholder..."> <a
						class="ui label">
						Label
					</a></div>
					<div class="ui divider"></div>
					<div class="ui labeled icon input">
						<div class="ui label">
							http://
						</div>
						<input type="text" placeholder="domain.com"> <i class="add circle link icon"></i></div>
					<div class="ui right action input"><input type="text" placeholder="domain.com">
						<div class="ui teal button"><i class="add icon"></i>
							Add
						</div>
					</div>
					<div class="ui divider"></div>
					<div class="ui corner labeled input"><input type="text" placeholder="Required Field">
						<div class="ui corner label"><i class="asterisk icon"></i></div>
					</div>
				</div>
			</div>
			<div style="clear: both; display: block;"></div>
		</div>
		<h2 class="ui dividing header">Card</h2>
		<div>
			<div class="ui four cards">
				<div class="ui card"><img src="static/images/wireframes/image.png" class="ui image dimmable">
					<div class="content">
						<div class="header">Title</div>
						<div class="meta"><a>Meta</a></div>
						<div class="description">
							One or two sentence description that may go to several lines
						</div>
					</div>
					<div class="extra content"><a>Arbitrary</a>
						<div class="right floated"><a>Arbitrary</a></div>
					</div>
				</div>
				<div class="ui card"><img src="static/images/wireframes/image.png" class="ui image dimmable">
					<div class="content"><a class="header">Name</a>
						<div class="meta">Date</div>
					</div>
					<div class="extra content"><a><i class="users icon"></i> Users</a></div>
				</div>
				<div class="ui card">
					<div class="ui slide right reveal image">
						<div class="visible content"><img src="static/images/avatar/nan.jpg" class="ui fluid image">
						</div>
						<div class="hidden content"><img src="static/images/avatar/tom.jpg" class="ui fluid image">
						</div>
					</div>
					<div class="content"><img src="static/images/wireframes/paragraph.png" class="ui wireframe image">
					</div>
				</div>
				<div class="ui card">
					<div class="ui move reveal image">
						<div class="visible content"><img src="static/images/avatar/tom.jpg" class="ui fluid image">
						</div>
						<div class="hidden content"><img src="static/images/avatar/nan.jpg" class="ui fluid image">
						</div>
					</div>
					<div class="content"><img src="static/images/wireframes/paragraph.png" class="ui wireframe image">
					</div>
				</div>
			</div>
			<div class="ui four cards">
				<div class="ui card">
					<div class="extra content"><i class="like icon"></i> Like
						<div class="right floated"><span><i class="star icon"></i> Favorite
        </span></div>
					</div>
					<div class="content"><img src="static/images/wireframes/paragraph.png" class="ui image"></div>
				</div>
				<div class="ui card">
					<div class="content">
						<div class="header"><img src="static/images/wireframes/square-image.png"
						                         class="ui avatar right spaced image">
							Abbreviated Header
						</div>
						<div class="description"><img src="static/images/wireframes/paragraph.png" class="ui image">
						</div>
					</div>
					<div class="ui bottom attached two buttons">
						<div role="button" class="ui button">
							Action 1
						</div>
						<div role="button" class="ui button">
							Action 2
						</div>
					</div>
				</div>
				<a href="#" class="ui card">
					<div class="content">
						<div class="header">Cute Dog</div>
						<div class="meta"><span class="category">Animals</span></div>
						<div class="description"><img src="static/images/wireframes/paragraph.png"
						                              class="ui wireframe image"></div>
					</div>
					<div class="extra content">
						<div class="right floated author"><img src="static/images/wireframes/square-image.png"
						                                       class="ui avatar image"> Username
						</div>
					</div>
				</a>
				<div class="ui card">
					<div class="ui two top attached basic buttons">
						<div class="ui button">
							Action 1
						</div>
						<div class="ui button">
							Action 2
						</div>
					</div>
					<div class="content"><img src="static/images/wireframes/paragraph.png" class="ui wireframe image">
					</div>
					<div class="ui two bottom attached basic buttons">
						<div class="ui button">
							Action 3
						</div>
						<div class="ui button">
							Action 4
						</div>
					</div>
				</div>
			</div>
			<div class="ui four cards">
				<div class="ui card">
					<div class="content">
						Content 1
					</div>
					<div class="content">
						Content 2
					</div>
					<div class="content">
						Content 3
					</div>
					<div class="extra content">
						Extra Content
					</div>
				</div>
				<div class="ui card">
					<div class="content">
						Content 1
					</div>
					<div class="content">
						Content 2
					</div>
					<div class="content">
						Content 3
					</div>
					<div class="extra content">
						Extra Content
					</div>
				</div>
				<div class="ui card">
					<div class="content">
						Content 1
					</div>
					<div class="content">
						Content 2
					</div>
					<div class="content">
						Content 3
					</div>
					<div class="extra content">
						Extra Content
					</div>
				</div>
				<div class="ui card">
					<div class="content">
						Content 1
					</div>
					<div class="content">
						Content 2
					</div>
					<div class="content">
						Content 3
					</div>
					<div class="extra content">
						Extra Content
					</div>
				</div>
			</div>
			<div class="ui four cards">
				<div class="card">
					<div class="image"><img src="static/images/wireframes/image.png"></div>
					<div class="extra center aligned">
						<div data-rating="4" class="ui star rating"><i class="icon active"></i> <i
							class="icon active"></i> <i class="icon active"></i> <i class="icon active"></i></div>
					</div>
				</div>
				<div class="card">
					<div class="image"><img src="static/images/wireframes/image.png"></div>
					<div class="extra center aligned">
						<div data-rating="2" class="ui star rating"><i class="icon active"></i> <i
							class="icon active"></i> <i class="icon"></i> <i class="icon"></i></div>
					</div>
				</div>
				<div class="card">
					<div class="image"><img src="static/images/wireframes/image.png"></div>
					<div class="extra center aligned">
						<div data-rating="3" class="ui star rating"><i class="icon active"></i> <i
							class="icon active"></i> <i class="icon active"></i> <i class="icon"></i></div>
					</div>
				</div>
				<div class="card">
					<div class="image"><img src="static/images/wireframes/image.png"></div>
					<div class="extra center aligned">
						<div data-rating="4" class="ui star rating"><i class="icon active"></i> <i
							class="icon active"></i> <i class="icon active"></i> <i class="icon active"></i></div>
					</div>
				</div>
			</div>
			<div style="clear: both; display: block;"></div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>

</style>
